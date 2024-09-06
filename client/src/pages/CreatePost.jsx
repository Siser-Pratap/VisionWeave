import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo:"",
  });  

  const [generatingImg, setGeneratingImg] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
      setform({...form, [e.target.name] : e.target.value});
  }

  const handlepromptChange = (e) => {
    setform({...form, [e.target.prompt]:e.target.value})}; 


  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setform({...form, prompt: randomPrompt});
};


const generateImage = async()=>{

} 

  // const generateImage = async() => {
  //   if(form.prompt){
  //     try{
  //       setGeneratingImg(true);
  //       const response = await fetch("http://localhost:8080/api/v1/image",{
  //         method:"POST",
  //         headers:{
  //           "Content-Type":"application/json",
  //         },
  //         body:JSON.stringify({prompt:form.prompt}),
  //       })

  //       const data = await response.json();

  //       setform({...form, photo:`data:image/jpeg;base64,${data.photo}`});
  //     }
  //     catch(err){
  //       alert(err);
  //     }
  //     finally{
  //       setGeneratingImg(false);
  //     }
  //   }else{
  //     alert("Please enter a prompt");
  //   }
  // };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through Image_Gen and share it with the community</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handlepromptChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        {/* <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div> */}

        <div className="mt-10">
          
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={generateImage}
          >
            Generate
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;


