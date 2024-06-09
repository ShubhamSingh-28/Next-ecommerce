import { Connectdb } from "@/utils/ConnectDb"
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";



export const GET = async()=>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const cartCount  = await Cart.countDocuments({user: session.user._id})
        return NextResponse.json({cartCount, message: "Product added in cart successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error getting Cart product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
