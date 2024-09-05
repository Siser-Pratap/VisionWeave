import express from "express";
import * as dotenv from "dotenv";
import {OpenAI} from "openai";



dotenv.config();
const router = express.Router();

//connecting with openai API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



router.route("/").get((req, res)=> {
    res.send("Hello from Image_Gen");
});

router.route("/").post(async(req, res)=>{
    try{
        const {prompt}=req.body;

        const aiRespone = await openai.createImage({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json",
        });

        const img = aiRespone.data.data[0].b64_json;
        res.status(200).json({photo:image});
    }
    catch(err){
        console.log(err);
        res.status(500).send(err?.response.data.error.message);
    }
})
export default router;


