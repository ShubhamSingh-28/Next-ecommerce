import { Schema, model, models } from "mongoose";

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
        type: String,
        required: true
    },
},{timestamps:true})

 const Cart = models.Cart || model("Cart", CartSchema)
export default Cart;