import Product from "@/models/product";
import { Connectdb } from "@/utils/ConnectDb";
import { NextResponse } from "next/server";


export const GET=async(req,{params})=>{
    try {
        const param = params;
        Connectdb();
        const products = await Product.findById(param.id);
        if (!products) {
            return new NextResponse(JSON.stringify({message: "product not found"}),{status:400})
        }
        return NextResponse.json(products, {status:200})
    } catch (error) {
        return new NextResponse("Internal server error" ,{status:500} )
    }
}