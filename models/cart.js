import mongoose, { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    }
},{timestamps:true})

 const Cart = model("Cart", CartSchema)
export default Cart;
