import Cart  from "@/models/cart";
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import Product from "@/models/product";


export const POST = async(req)=>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { productId } = await req.json(); // Parsing the request body correctly
        const product = await Product.findById(productId); // Correct method to find a product by ID
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }
       const newCart = await Cart.create
       ({user:session.user._id,
        product:productId,
        quantity:1,
        totalPrice:product.price
       })

        return NextResponse.json({newCart, message: "Product added in cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
   
}

export const GET = async()=>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const viewCart  = await Cart.find({user: session.user._id})   
        return NextResponse.json({viewCart, message: "Product added in cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}