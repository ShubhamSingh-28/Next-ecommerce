import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { NextResponse } from "next/server";



export const GET = async (req,{params}) => {
    try {
        const param = params;
        console.log(param);
        await Connectdb()
        const categoryProduct = await Product.find({ category: param.category })
            .sort({ createdAt: -1 })
        return NextResponse.json({categoryProduct, message: " All Product " }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
       
    }
