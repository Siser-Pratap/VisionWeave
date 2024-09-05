import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();

const port = 8080;

app.use(cors());

app.use(express.json({limit:"50mb"}));

app.get("/", async(req, res)=>{
    res.send("Hello from Image_Gen");
});

const startServer = async() => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(port, ()=>{
            console.log(`Server running on http://localhost:${port}`);
        })
    }
    catch(error){
        console.log(error);
    }
}



startServer();

