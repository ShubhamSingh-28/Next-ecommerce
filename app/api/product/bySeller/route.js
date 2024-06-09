import { Connectdb } from "@/utils/ConnectDb"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import Product from "@/models/product"
import { NextResponse } from "next/server"


export const GET = async() =>{
    try {
        await Connectdb()
        const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user._id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
        const products = await Product.find({owner:session.user._id}).sort({createdAt:"desc"}).lean().populate("owner")
        return NextResponse.json({products, message: " My Product " }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}