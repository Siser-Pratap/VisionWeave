import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import { fetchImages } from '../services/model-api';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const CreatePost = () => {

  const navigate = useNavigate();
  const [medium, setmedium] = useState(false);
  
  
  const tl = useRef();
  const back = useRef();
  const nav = useRef();
  const navItems = useRef();
  const hover = useRef();
  const navValues = document.querySelector(".navValues");  
  const image =useRef(); 

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    url:"",
  });

  const handleAvailOptions = (option) => {
    setPromptQuery(option);
  };


  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageResult, setImageResult] = useState(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  
  const handleGenerate = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    const promptQuery = form.prompt;
    console.log(promptQuery);
  
    try {
      setGeneratingImg(true);
      const imageBlob = await fetchImages(
        promptQuery
      );

      
      const fileReaderInstance = new FileReader();
      // This event will fire when the image Blob is fully loaded and ready to be displayed
      fileReaderInstance.onload = () => {
        let base64data = fileReaderInstance.result;
        setImageResult(base64data);
        console.log(base64data)
        setForm({ ...form, url: base64data });
        console.log(form);
      };
      // Use the readAsDataURL() method of the FileReader instance to read the image Blob and convert it into a data URL
      fileReaderInstance.readAsDataURL(imageBlob);
  
      // Create a URL from the image Blob
      
      
      // Set the image URL directly as the result
      
      

      setGeneratingImg(false);
    } catch (error) {
      // Handle error
      console.error("Error fetching images from API:", error);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.prompt && form.url){
      setLoading(true);
      
      try {
        const response = await fetch("https://visionwave.onrender.com/api/v1/post",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...form}),
        });
        await response.json();
        alert("Success");
        navigate("/");
  
      } catch (error) {
        console.log(error.message);
      }
      finally{
        setLoading(false);
      }
    }
    else{
      alert("'Please generate an image with proper details")
    }
  };

  

    
    useGSAP(() => {
      gsap.from(image.current, {
        opacity: 0,
        x: "-80px",
        rotate: 0,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    
      gsap.set(".navValues", { y: "-100vh", opacity: 0, transform: "translate3d(0, 0, 0)" });
      gsap.set(back.current, { x: "-100vw" });
    
      gsap.to(image.current, {
        opacity: 1,
        x: "0",
        delay: 0.1,
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.5,
      });
    
      tl.current = gsap
        .timeline({ paused: true })
        .to(back.current, {
          zIndex: 2,
          x: 0,
          duration: 0.4,
          stagger:-1,
          ease: "expo.inOut",
        })
        .to(".navValues", {
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "expo.inOut",
          opacity: 1,
        });
    });
    
   useEffect(()=>{
     if(!medium){
       tl.current.reverse();
     }
     else{
       tl.current.play();
     }
   },[medium])
  
  
  






    
    
   
  

return (
<div className='absolute z-[50] w-full h-auto overflow-hidden'>
  <div className='absolute z-[0] w-full'>
        <nav ref={nav} class="bg-inherit ml-0 sm:ml-20 flex justify-center items-center">
          <div class="max-w-screen-xl flex no-wrap w-full items-center justify-between p-6 ">
            <a href="/" class="flex items-center jus space-x-3 md:space-x-14 rtl:space-x-reverse">
                <img ref={image} src="/logo.png" className='h-12 w-auto  logo ' alt="logo" />
                <span class="self-center name  text-[#fff]  text-[1.5rem] font-[400] transform hover:translate-y-[-3px] transition duration-300 ease-in-out  whitespace-nowrap hover:text-transparent hover:bg-secondary bg-clip-text">VisionWeave</span>
            </a>
            <div class="flex justify-center items-center gap-[4px] md:gap-[8px] md:order-2 ml-0 sm:ml-20">
                <a href="www.github.com/siser-pratap"><div className='cursor-pointer'><svg className="text-white w-5 ml-1 h-5 " xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="" height="" viewBox="0 0 50 50">
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                </div></a>
                <button onClick={()=>setmedium(!medium)} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center mr-[0px] p-2 w-10 h-10 justify-end text-sm rounded-lg md:hidden " aria-controls="navbar-cta" aria-expanded="false">
                  {medium?(<svg className="navButtons w-5 h-5  text-white font-bold" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  fill="white" 
                            stroke="white" strokeWidth="4" viewBox="0 0 64 64"><path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
                                      </svg>):(<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>)}
                </button>
            </div>
            <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-cta">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className='bg-inherit'>
                  <a href="/" class="block font-[Ancient] text-[1.3rem]  transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 bg-inherit hover:text-transparent hover:bg-secondary bg-clip-text" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#contact" class="block font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary bg-clip-text">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
  <div ref={back} className='h-[100vh] back absolute z-[-1] w-full min-w-[254px] '>
        <div className='w-auto robot h-full bg-robot-pattern bg-cover bg-no-repeat bg-center backdrop-blur-md'>
          <div onClick={()=>setmedium(!medium)} className='flex justify-end p-5 cursor-pointer transform hover:scale-5  transition hover:-translate-y-1 duration-200 ease-in-out'>
            <svg className="navButtons w-5 h-5  text-white font-bold" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  fill="white" 
                            stroke="white" strokeWidth="4" viewBox="0 0 64 64"><path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
            </svg>
          </div>
          <div class="h-full w-full flex flex-col justify-center items-baseline left-[50px] ml-[20vw]" >
              <ul class="flex flex-col navVal gap-[20px] mb-[30px]">
                <li className='p-2px transform hover:scale-125  transition hover:-translate-y-1 duration-200 ease-in-out'>
                  <a href="/" class="block navValues font-[Ancient] text-[1.3rem]  transform hover:translate-[20px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary bg-clip-text" aria-current="page">Home</a>
                </li>
                <li onClick= {()=>setmedium(!medium)}className='p-2px transform hover:scale-125  transition hover:-translate-y-1 duration-200 ease-in-out' >
                  <a href="#" class="block navValues font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-x-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary bg-clip-text">Create</a>
                </li>
                <li className='p-2px transform hover:scale-125  transition hover:-translate-y-1 duration-200 ease-in-out'>
                  <a href="#contact" class="block navValues font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-x-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary bg-clip-text">Contact</a>
                </li>
              </ul>
          </div>
        </div>
  </div>
  <div  className='pt-20 px-20 w-full h-auto bg-love bg-cover'>
        <section className="max-w-7xl mx-auto my-20 flex justify-center items-center sm:items-baseline flex-col">
          <div id="create">
            <h1 className="inline font-serif text-[2rem] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white/80 py-2 sm:px-3 px-0 md:p-0 bg-inherit hover:text-transparent hover:bg-secondary bg-clip-text">Create</h1>
            <p className="mt-2 text-[1rem] text-gray-500 max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
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
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />

              <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                { imageResult ? (
                  <img
                    src={imageResult}
                    alt={form.prompt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={preview}
                    alt=""
                    className="w-9/12 h-9/12 object-contain opacity-40"
                  />
                )}

                {generatingImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <button
                type="button"
                onClick={handleGenerate}
                className=" text-white bg-inherit hover:bg-secondary hover:text-black font-semibold hover:border-[1px] hover:border-secondary font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
            </div>

            <div className="mt-10">
              <p className="mt-2 text-white/80 text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
              <button
                type="submit"
                className="mt-3 text-white bg-inherit  font-semibold hover:bg-secondary hover:border-[1px] hover:border-secondary rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {loading ? 'Sharing...' : 'Share with the Community'}
              </button>
            </div>
            
          </form>
        </section>
  <footer id="contact" class="bg-inherit text-gray-300 py-6 pt-20">
    <div class="max-w-7xl mx-auto px-4 flex justify-center items-center flex-col">
      <div class="flex sm:justify-between  flex-col gap-[20px] items-center mb-4 ">
        <div class="space-x-2 sm:space-x-6 w-full">
          <a href="https://github.com/Siser-Pratap" alt="github.com/siser-pratap" class="text-sm hover:text-gray-400">Developers</a>
          <a href="#create" class="text-sm hover:text-gray-400">Create</a>
          <a href="https://github.com/Siser-Pratap/VisionWave" class="text-sm hover:text-gray-400">Contribute</a>
        </div>
        <div class="flex space-x-4 ">
          <a href="https://www.instagram.com/siser_ins17/" class="text-gray-300 hover:text-gray-400"><i class="fab fa-instagram"></i></a>
          {/* <a href="#" class="text-gray-300 hover:text-gray-400"><i class="fab fa-twitter"></i></a> */}
          <a href="https://github.com/Siser-Pratap" class="text-gray-300 hover:text-gray-400"><i class="fab fa-github"></i></a>
          <a href="www.linkedin.com/in/siser" class="text-gray-300 hover:text-gray-400"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <p class="text-sm text-center text-gray-400">© 2024 Your Company, Inc. All rights reserved.</p>
      <a href="www.github.com/siser-pratap"><p className='text-center bg-secondary bg-clip-text text-[2rem] mt-2 text-transparent cursor-pointer'>Made by Siser Pratap</p></a>
    </div>
  </footer>
  </div>
  
</div>
  );
};

export default CreatePost;
