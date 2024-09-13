import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import imageRoutes from "./routes/imageRoutes.js";
import postRoutes from "./routes/postRoutes.js";








dotenv.config();
const app = express();
const port = 8080;












//middleware middle
app.use(cors());
app.use(express.json());

app.use("/api/v1/post", postRoutes);
app.use('/api/v1/image', imageRoutes);









app.get("/", async(req, res)=>{
    res.send("Hello from Image_Gen");
    // console.log(response.data[0].url);
});







//connecting to database and port
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

