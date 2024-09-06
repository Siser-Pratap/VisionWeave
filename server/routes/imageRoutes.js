// import express from "express";
// import * as dotenv from "dotenv";
// import OpenAI from "openai";





// dotenv.config();
// const router = express.Router();

// // connecting with openai API
// // const openai = new OpenAI({
// //     apiKey: process.env.OPENAI_API_KEY,
// // });

// // const configuration = new Configuration({
// //     apiKey: process.env.OPENAI_API_KEY,
// //   });
  
// //   const openai = new OpenAIApi(configuration);

// // const openai = new OpenAI();

// // const response = await openai.images.generate({
// //     model: "dall-e-2",
// //     prompt: "a white siamese cat",
// //     n: 1,
// //     size: "1024x1024",
// //   });

// //   console.log(response.data[0].url);








// router.route("/").get((req, res)=> {
//     res.send("Hello from Image_Gen");
// });

// router.route("/").post(async(req, res)=>{
//     try{
//         const prompt=req.body.prompt;

//         const response = await fetch("https://api.openai.com/v1/images/generations",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//                 Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//             },
//             body:JSON.stringify({
//                 prompt:`${prompt}`,
//                 n:1,
//                 size:"1024x1024",
//                 response_format:"b64_json", 
//             })
//         })
        
        
        
//         // const aiRespone = await openai.createImage({
//         //     prompt,
//         //     n:1,
//         //     size:"1024x1024",
//         //     response_format:"b64_json",
//         // });

//         // const img = await openai.images.generate({prompt});
//         // console.log(img.data[0].url);

//         const image = response.data.data[0].b64_json;
//         res.status(200).json({photo:image});

        
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send(err?.response.data.error.message);
//     }
// })
// export default router;



import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
// import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
//   });

  
const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async(req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;

