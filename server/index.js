import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();

const port =3000;

app.use(cors());

app.use(express.json({limit:"50mb"}));

app.get("/", async(req, res)=>{
    res.send("Hello from Image_Gen");
});

// const startServer = async() => {
//     app.listen(8080, ()=> console.log("Server has started on port http://localhost:8080"));
// }

app.listen(port, async()=>{
    console.log("Server has started on port http://localhost:3000");
})
