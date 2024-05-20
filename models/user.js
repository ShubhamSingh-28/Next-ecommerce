import mongoose, {  Schema } from "mongoose";


const Usermodel =new Schema({
    email:{type:String, required:true},
    name:{type:String, required:true},
    username:{type:String,required:true},
    profilePic:{type:String},
},{timestamps:true});

const User =mongoose.models.User || mongoose.model("User", Usermodel);

export default User;