import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary } from "cloudinary";


import Post from "../models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
});



//GET REQUEST

router.route("/").get(async (req, res) => {
    console.log(req.body);
    try {

        const posts = await Post.find({});
        
        res.status(200).json({success:true, data:posts});
        
        
    } catch (error) {
        res.status(500).json({success:false, message:"Fetching failed"});
    }

});


//POST REQUEST

router.route("/").post(async(req, res)=> {
    

    try {
       
        const {name, prompt, url} = req.body;
        
        const photoUrl = await cloudinary.uploader.upload(url);
        
        const newPost = await Post.create({
            name,
            prompt,
            url:photoUrl.secure_url,
        });
        
        res.status(200).json({success:true, data:newPost});
        
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
});

export default router;