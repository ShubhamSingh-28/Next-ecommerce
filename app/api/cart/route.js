import Cart from "@/models/Cart";
import Product from "@/models/Product";  // Ensure these models are imported to register with mongoose
import User from "@/models/User";       // Ensure these models are imported to register with mongoose
import { Connectdb } from "@/utils/ConnectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
    try {
        await Connectdb();
        const session = await getServerSession(authOptions);
        if (!session || !session.user || !session.user._id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const viewCart = await Cart.find({ user: session.user._id }).populate("product");
        if (viewCart) {
            return NextResponse.json({ viewCart, message: "Cart retrieved successfully" }, { status: 200 });
        }
        return NextResponse.json({ message: "Please try again" }, { status: 204 });

    } catch (error) {
        console.error("Error getting Cart product:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};
