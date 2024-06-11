import Cart from "@/models/cart";
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";




export const GET = async()=>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        console.log(session.user);
        const viewCart  = await Cart.findOne({user: session.user._id}).populate("product")
        console.log(viewCart);
        return NextResponse.json({viewCart, message: "Product added in cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error getting Cart product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


