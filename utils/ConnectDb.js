import  mongoose  from "mongoose";

export const Connectdb = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected....");
    } catch (error) {
        console.log(error);
    }
}