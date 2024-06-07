import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { NextResponse } from "next/server";



export const GET = async () => {
    try {
         await Connectdb()
         const products = await Product.find({}).sort({createdAt:"desc"}).lean().populate("owner")
        return NextResponse.json({products, message: " All Product " }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}