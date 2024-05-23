import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req) => {
  try {
    await Connectdb();

    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user._id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, image } = await req.json();
    console.log(image); // Extract JSON body
    if (!name) {
      return NextResponse.json({ error: "Product name is required" }, { status: 400 });
    }

    const newProduct = await Product.create({ name, owner: session.user._id, image });
    return NextResponse.json({ product: newProduct, message: "Product added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
