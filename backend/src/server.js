import express from "express"
import {ENV} from "./lib/env.js"
import path from "path"
import { connectDB } from "./lib/db.js";
import cors from "cors"
//import {syncUser,deleteUserFromDB} from "./lib/inngest.js"
import {serve} from "inngest/express"


const app=express();

const __dirname=path.resolve()
app.use(express.json())
//credentials:server allows our browser to include the cokkies in request 
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
//app.use("/api/inngest",serve({client:inngest,functions}))


app.get("/hello",(req,res)=>{
    res.status(200).json({msg:"message from api"})
})

// make our app ready for the deployment
// connects the backend and frontend it will send the static files of the frontend from dist folder 
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })

}
const PORT = ENV.PORT || 5000;

const startServer=async()=>{
    try {
        await connectDB()
        app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`)
    
        
    }) }catch (error) {
        console.error("error in staring the port")
        
    }
}

startServer()
//cd backend && npm install && cd ../frontend && npm install --include=dev && npm run build node backend/src/server.js