import mongoose, { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    productName: {
        type: String,
        required:true
    },
    productId: {
        type: String,
        required:true
    },
    Pcategory:{
        type: String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    quantity: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required:true
    },
    Pimages:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    totalPrice:{
        type: Number,
        required: true
    }
},{timestamps:true})

 const Cart = mongoose.models.Product || model("Cart", CartSchema)
export default Cart;
