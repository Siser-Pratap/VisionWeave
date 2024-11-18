import React, { useEffect } from 'react'
import { downloadImage } from '../utils'
import {download} from "../assets";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Card = ({_id, name, prompt, url}) => {


  useEffect(() => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 1,
          ease: "power1.out",
          filter:"brightness(70%)",
        });
      });
  
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 1,
          ease: "power1.out",
          filter:"brightness(100%)",
        });
      });
    });
  }, []);





  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={url}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="bg-secondary text-transparent bg-clip-text text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white/70 text-sm">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, url)} className="outline-none  border-none">
          <img src={download} alt="download" className="w-6 h-6 object-contain invert " />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card