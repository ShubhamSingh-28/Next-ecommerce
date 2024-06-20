import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

export const POST = async (req) => {
  try {
    await Connectdb();

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user._id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.formData();
    const img = data.get("images");
    const name = data.get("name");
    const brands = data.get("brands");
    const category = data.get("category");
    const description = data.get("description");
    const price = data.get("price");
    const stocks = data.get("stocks");
   

    console.log(img)

    if (!img) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }


    const arrayBuffer = await img.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const stream = Readable.from(buffer);

    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "products" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.pipe(uploadStream);
    });

    const response = await uploadPromise;
    console.log(response);

const newProduct = await Product.create({
  owner: session.user._id,
  name,
  brands,
  category,
  description,
  price,
  stocks,
  images: [
    {
      public_id: response.public_id,
      url: response.secure_url
    }
  ]
})
    // Return a success response
    return NextResponse.json({newProduct, message: "Product added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};