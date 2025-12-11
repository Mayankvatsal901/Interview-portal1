import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(ENV.DB_URL)
        console.log("connected to MongoDb:")
        
    } catch (error) {
        console.error("Error connecting to MongoDb",error.message)
        process.exit(1)
        
    }
}