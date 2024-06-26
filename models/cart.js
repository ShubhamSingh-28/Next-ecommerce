import mongoose, { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    productName:{
        type: String,
        required: true
    },
    productUrl:{
        type: String,
        required: true
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

 const Cart = mongoose.models.Product || model("Cart", CartSchema)
export default Cart;
