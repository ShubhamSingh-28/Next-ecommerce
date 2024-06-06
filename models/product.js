import mongoose, {  Schema } from "mongoose";


const Productmodel =new Schema({
    name: {
        type: String,
        required:true
    },
    stocks: {
        type: Number,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    images:[
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
    category:{
        type: String,
        required:true
    },
    brands:{
        type: String,
        required:true
    },
},{timestamps:true});

const Product =mongoose.models.Product || mongoose.model("Product", Productmodel);

export default Product;