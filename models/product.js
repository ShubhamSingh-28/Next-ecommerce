import mongoose, {  Schema } from "mongoose";


const Productmodel =new Schema({
    name:{type:String, required:true},
    owner:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true});

const Product =mongoose.models.Product || mongoose.model("Product", Productmodel);

export default Product;