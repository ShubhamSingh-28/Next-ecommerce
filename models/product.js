import mongoose, {  Schema } from "mongoose";


const Productmodel =new Schema({
    name: {
        type: String,
        required: true
    },
    stocks: {
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    brands:{
        type: String,
        required: true
    },
},{timestamps:true});

const Product =mongoose.models.Product || mongoose.model("Product", Productmodel);

export default Product;