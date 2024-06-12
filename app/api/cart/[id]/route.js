import Cart from "@/models/cart";
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Product from "@/models/product";



export const POST = async(req,{params})=>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions)
        if (!session || !session.user || !session.user._id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const param = params
        const product = await Product.findOne({_id:param.id });
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        // Check if the cart item already exists for the user and product
        let cartItem = await Cart.findOne({ user: session.user._id, productid: param.id });

        if (cartItem) {
            cartItem.quantity += 1;
            cartItem.totalPrice = product.price * cartItem.quantity;
            await cartItem.save();
        } else {
            // If the cart item does not exist, create a new cart item
            cartItem = await Cart.create({
                user: session.user._id,
                productid: param.id ,
                productName:product.name,
                Pcategory:product.category,
                productPrice:product.price,
                Pimages :[
                    {
                        public_id:product.public_id,
                        url:product.url
                    }
                ],
                quantity: 1,
                totalPrice: product.price
            });
           
        }

        return NextResponse.json({ cartItem, message: "Product added to cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};

export const PUT = async(req,{params})=>{
    try {
        await Connectdb()
        const param = params
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const product = await Product.findOne({_id:param.id });
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        let cartItem = await Cart.findOne({ user: session.user._id, productId: param.id });
        if (cartItem) {
            cartItem.quantity -= 1;
            cartItem.totalPrice = cartItem.totalPrice - product.price ;
            await cartItem.save();
        }
        return NextResponse.json({ cartItem, message: "Product added to cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};

export const DELETE = async(req,{params})=>{
    try {
        await Connectdb()
        const param = params
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        let cartItem = await Cart.findOneAndDelete({ user: session.user._id, productId: param.id });
        return NextResponse.json({ cartItem, message: "Product added to cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}   