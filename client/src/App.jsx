import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {



  const [medium, setmedium] = useState(false);
  
  const tl = useRef();
  const back = useRef();
  const nav = useRef();

  useGSAP(() => {
    gsap.set(".navValues",{y:"-100vh"});
   gsap.set(back.current, {x:"-100vw"});
   tl.current = gsap
         .timeline({paused:true})
         .to(back.current, {
           zIndex:2,
           x:0,
           duration:0.5,
           ease:"power2.inOut",
         })
         .to(".navValues",{
           y:0,
           duration:0.5,
           stagger:-0.2,
           ease:"power4.inOut",
           delay:-0.25,
         })
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
  <BrowserRouter>
    {/* <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      
    </header> */}
    
<div className=''>
  <div className='relative '>
    <div className='absolute z-[0] w-full'>
      <nav ref={nav} class="bg-[#151030] ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-2px p-6 min-w-[301px]">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="" className='h-8 ' alt="logo" />
              <span class="self-center name  text-[#fff]  text-[1.5rem] font-[400] transform hover:translate-y-[-3px] transition duration-300 ease-in-out  whitespace-nowrap hover:text-transparent hover:bg-secondary hover:bg-clip-text">Name</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" class=" font-medium rounded-[20px] text-white text-sm px-4 py-2 text-center bg-secondary hover:bg-tertiary font-[Ancient] text-[1.3rem]">Create</button>
              <button onClick={()=>setmedium(!medium)} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden " aria-controls="navbar-cta" aria-expanded="false">
                {medium?(<svg className="navButtons w-5 h-5  text-white font-bold" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  fill="white" 
                          stroke="white" strokeWidth="4" viewBox="0 0 64 64"><path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
                                    </svg>):(<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>)}
              </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" class="block font-[Ancient] text-[1.3rem]  transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">About</a>
              </li>
              <li>
                <a href="#" class="block font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">Services</a>
              </li>
              <li>
                <a href="#" class="block font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div ref={back} className='h-[100vh] absolute z-[-1] w-full bg-red-500'>
        <div class="items-center flex justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" class="block navValues font-[Ancient] text-[1.3rem]  transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block navValues font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">About</a>
              </li>
              <li>
                <a href="#" class="block navValues font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">Services</a>
              </li>
              <li>
                <a href="#" class="block navValues font-[Ancient] text-[1.3rem] font-[100] transform hover:translate-y-[-3px] transition duration-300 ease-in-out text-white py-2 px-3 md:p-0 hover:text-transparent hover:bg-secondary hover:bg-clip-text">Contact</a>
              </li>
            </ul>
        </div>
    </div>
  </div>
</div>




    <main className=" sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

}

export default App;