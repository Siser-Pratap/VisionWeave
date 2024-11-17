import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {

  
  
  return (
  <BrowserRouter>
    {/* <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      
    </header> */}
    

<nav class="bg-[#151030]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="" className='h-8 ' alt="logo" />
        <span class="self-center name  text-[#fff]  text-[1.5rem] font-[400] transform hover:translate-y-[-3px] transition duration-300 ease-in-out  whitespace-nowrap hover:text-transparent hover:bg-secondary hover:bg-clip-text">Name</span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="focus:ring-4 focus:outline-none font-medium rounded-[20px] text-white text-sm px-4 py-2 text-center bg-secondary hover:bg-tertiary font-[Ancient] text-[1.3rem]">Create</button>
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
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



    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

}

export default App;