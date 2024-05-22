import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await Connectdb();
    
    // Assuming `req.user` is populated by some middleware/auth logic
    const owner = req.session?.user;
    console.log(owner);
    const { name } = await req.json(); // Extract JSON body

    const newProduct = await Product.create({ name, });

    return NextResponse.json({ product: newProduct, message: "Product added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
