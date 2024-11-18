import React, { useEffect, useState } from 'react';

import { Card, FormField, Loader } from '../components';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Carousel } from "@material-tailwind/react";



const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};




const Home = () => {

  const [loading, setLoading] = useState(false);

  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const bg = useRef();

  const models = [
    {
      id: 1,
      title: "DreamShaper v7",
      description:
        "Lykon is back with another update. This model is great at a range of different styles.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "SDXL 1.0",
      description:
        "Diffusion-based text-to-image generative model.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      title: "SDXL 0.9",
      description:
        "The latest Stable Diffusion model, currently in Beta.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      title: "3D Animation Style",
      description:
        "Great at 3D film vibes, capable of complex scenes with rich color. Storyboard time!",
      image: "https://via.placeholder.com/400x300",
    },
  ];


useEffect(() => {
  const img1 = document.querySelector(".image1");
  const img2 = document.querySelector(".image2");
  const img3 = document.querySelector(".image3");
  const img4 = document.querySelector(".image4");



  const carousel = document.querySelector(".carousel");

  const map = [
    {
      "targetimg":"img1",
    },
  ]
  

  img1.addEventListener("mouseenter", () => {
    img1.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1731469315/sufhgv3wymtmtl928lgq.jpg"; 
    
    gsap.to(img1, {
      duration: 0,
      ease: "power1.out",
      filter:"blur(0)",
      
    });
    gsap.to(".hello1", {
      scale:1.05,
      duration:1,
    })
    
  });

  img1.addEventListener("mouseleave", () => {
    img1.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"; 
    gsap.to(img1, {
      duration: 0,
      ease: "power1.out",
      filter:"blur(2px)",
    });
    gsap.to(".hello1", {
      scale:1,
      duration:1,
    })
});

img2.addEventListener("mouseenter", () => {
  img2.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1731469315/sufhgv3wymtmtl928lgq.jpg"; 
  
  gsap.to(img2, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(0)",
    
  });
  gsap.to(".hello2", {
    scale:1.05,
    duration:1,
  })
  
});

img2.addEventListener("mouseleave", () => {
  img2.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"; 
  gsap.to(img2, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(2px)",
  });
  gsap.to(".hello2", {
    scale:1,
    duration:1,
  })
});

img3.addEventListener("mouseenter", () => {
  img3.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1731469315/sufhgv3wymtmtl928lgq.jpg"; 
  
  gsap.to(img3, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(0)",
    
  });
  gsap.to(".hello3", {
    scale:1.05,
    duration:1,
  })
  
});

img3.addEventListener("mouseleave", () => {
  img3.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"; 
  gsap.to(img3, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(2px)",
  });
  gsap.to(".hello3", {
    scale:1,
    duration:1,
  })
});

img4.addEventListener("mouseenter", () => {
  img4.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1731469315/sufhgv3wymtmtl928lgq.jpg"; 
  
  gsap.to(img4, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(0)",
    
  });
  gsap.to(".hello4", {
    scale:1.05,
    duration:1,
  })
  
});

img4.addEventListener("mouseleave", () => {
  img4.src = "https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"; 
  gsap.to(img4, {
    duration: 0,
    ease: "power1.out",
    filter:"blur(2px)",
  });
  gsap.to(".hello4", {
    scale:1,
    duration:1,
  })
});


carousel.addEventListener("mouseenter", () => {
  gsap.to(carousel, {
    duration: 1,
    ease: "power1.out",
    scale:1.1,
  });
});

carousel.addEventListener("mouseleave", () => {
  gsap.to(carousel, {
    duration: 1,
    ease: "power1.out",
    scale:1,
  });
});




}, []);
  










  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  useEffect(() => {

    const fetchPosts = async() => {
      
      try {
        
        setLoading(true);
        
        const response = await fetch("https://image-gen-rnty.onrender.com/api/v1/post", {
          method:"GET",
          headers:{
            'Content-Type': 'application/json',
          },
        });

        

        if(response.ok){
          const result = await response.json();
          
          setAllPosts(result.data.reverse());
        }
        
      } catch (error) {
        alert(error.message);
      }
      finally{
        setLoading(false);
      }
    }



    fetchPosts();
  }, []);  



  return (
    <>
    <div ref={bg} className="h-[100vh] bg-love bg-cover w-full p-6">
      <div className='w-full h-full mt-32 flex justify-center items-center flex-col gap-[0.2rem] sm:flex-row sm:mt-30 sm:gap-[4rem] '>
        <div className='h-[50%] w-[50%] flex flex-col ml-0  '>
          <div className='flex justify-center items-center flex-col gap-[0.2rem] sm:gap-[2rem]'>
            <h1 className='font-[Ancient] text-[2rem] text-transparent bg-secondary bg-clip-text'>Creativity, Unleashed.</h1>
            <p className='font-[Ancient] text-transparent text-[1.25rem] bg-white bg-clip-text'>Leverage generative AI with a unique suite of tools to convey your ideas to the world.</p>
          </div>
          <div className='button mt-2 sm:mt-20 flex justify-center items-center gap-[8px] sm:gap-[1rem]'>
              <button type="button" class="font-medium justify-end rounded-[20px] text-black text-sm sm:text-md p-2 text-center bg-secondary hover:bg-tertiary font-[Ancient] text-[1.3rem] ">Get Started</button>
              <button type="button" class="font-medium justify-end rounded-[20px] text-black text-sm sm:text-md px-4 py-2 text-center bg-secondary hover:bg-tertiary font-[Ancient] text-[1.3rem] ">Developer</button>
          </div>
        </div>
        <div className='h-[80%] w-[80%] mb-40 sm:ml-20 sm:h-[50%] sm:w-[50%] sm:mb-20'>
            <div className='w-full carousel sm:w-auto '>
              <Carousel
                className="rounded-xl w-full h-80"
                autoplay="true"
                autoplayDelay={2500}
                loop="true"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-1 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
                >
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1731469315/sufhgv3wymtmtl928lgq.jpg"
                    alt="image 1"
                    className='h-full w-full object-contain rounded-2xl'
                    
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"
                    alt="image 2"
                    className="h-full w-full object-contain rounded-2xl"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1726250205/hxjn533ckxv6yvnk2xre.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain rounded-2xl"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1731417209/xpyd4ktvj9kxg5afxqkc.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain rounded-2xl"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1726245135/ji1ddkko6dq96vczswwq.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain rounded-2xl"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1726429140/lzsblbv4qoanutf63fpy.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain rounded-2xl"
                  />
                </Carousel>
            </div>
        </div>
      </div>
    </div>
    <div className='h-auto w-full bg-[#050816]'>
      <div className='p-6 h-full w-full'>
        <div className='pricing'>
                <div className="relative isolate  px-6 py-24 sm:py-32 lg:px-8">
                <div
                  className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                          ></div>
                </div>
              <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
              <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-transparent bg-secondary bg-clip-text sm:text-6xl p-1">Choose the right plan for you</p>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">Choose an affordable plan to get the most out of your DeepAI experience</p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
              <div className="rounded-3xl bg-white/20 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
                <h3 id="tier-hobby" className="text-base/7 font-semibold bg-secondary bg-clip-text text-transparent">Basic</h3>
                <p className="mt-4 flex items-baseline gap-x-2"><span className="text-5xl font-semibold tracking-tight text-white/80 hover:text-black">$29</span><span className="text-base text-white/70">/month</span></p>
                <p className="mt-6 text-base/7 text-white/50">The perfect plan if you're just getting started with our product.</p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                  <li className="flex gap-x-3 text-white/90">
                    <svg
                        className="h-6 w-5 flex-none text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    5 Images
                  </li>
                </ul>
                <a
                  href="#!"
                  ariaDescribedby="tier-hobby"
                  className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white/60 ring-1 ring-inset hover:bg-secondary hover:text-black ring-indigo-200 hover:ring-indigo-300"
                >
                  Get started today
                </a>
              </div>
            <div className="relative rounded-3xl bg-white/10 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
                <h3 id="tier-enterprise" class="text-base/7 font-semibold bg-secondary bg-clip-text text-transparent">Enterprise</h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                  <span class="text-5xl font-semibold tracking-tight  text-white/80 hover:text-black">$99</span>
                  <span class="text-base text-white/70">/month</span>
                </p>
                <p class="mt-6 text-base/7 text-white/50">Perfect to Succeed</p>
                <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
                  <li class="flex gap-x-3 text-white/90">
                    <svg class="h-6 w-5 flex-none text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    Unlimited Image Generation
                  </li>
                  <li class="flex gap-x-3 text-white/90">
                    <svg class="h-6 w-5 flex-none text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    24x7 Tech Support
                  </li>
                  <li class="flex gap-x-3 text-white/90">
                    <svg class="h-6 w-5 flex-none text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                    HD 4k Downloadable Images
                  </li>
                </ul>
              <a href="#" aria-describedby="tier-enterprise" class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-[#050816] text-white h-auto w-full flex flex-col gap-[20px] p-20">
      <div className="flex flex-col items-center justify-center text-center p-4 h-[40vh]">
        <h1 className="text-2xl  font-bold">
          Unveil New Creative Horizons with{" "}
          <span className="text-purple-400">Fine-tuned Models</span>
        </h1>
      </div>
      <div  id="scroll" className="flex flex-col w-full mt-4 sm:mt-20 justify-center  items-center sm:flex-row overflow-auto gap-[20px] h-2/3 sm:h-[60vh]">
        <div  class="hello1 overflow-hidden shadow-lg rounded-3xl cursor-pointer">
          <img  class="w-full h-[40vh] sm:h-[50vh] sm:w-[20vw] image1 blur-[2px]" src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg" alt="Sunset in the mountains" />
        </div>
        <div  class="max-w-sm hello2 overflow-hidden shadow-lg rounded-3xl ">
          <img  class="w-full h-[40vh] sm:h-[50vh] sm:w-[20vw] image2 blur-[2px]" src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg" alt="Sunset in the mountains" />
        </div>
        <div  class="max-w-sm hello3 overflow-hidden shadow-lg rounded-3xl ">
          <img  class="w-full h-[40vh] sm:h-[50vh] sm:w-[20vw] image3 blur-[2px]" src="/images/pexels.jpg" alt="Sunset in the mountains" />
        </div>
        <div  class="max-w-sm hello4 overflow-hidden shadow-lg rounded-3xl ">
          <img  class="w-full h-[40vh] sm:h-[50vh] sm:w-[20vw]  image4 blur-[2px]" src="/images/pexels.jpg" alt="Sunset in the mountains" />
        </div>
      </div>
    </div>
    <div className=' bg-[#050816]'>
      <div className='flex justify-center items-center flex-col gap-[20px]'>
        <p className="mt-0 text-balance text-3xl font-semibold tracking-tight text-transparent bg-secondary bg-clip-text sm:text-6xl ml-16 sm:m-0 p-2">Choose the right plan for you</p>
        <p className="mt-8 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8 mx-1 sm:mx-0">Browse through a collection of imaginative and visually stunning images generated by Dall-E AI</p>
      </div>
    <section className="max-w-7xl mx-auto">
    <div className="mt-16  ">
      <FormField
        labelName="Search posts"
        type="text"
        name="text"
        placeholder="Search something..."
        value={searchText}
        handleChange={handleSearchChange}
        
      />
    </div>

    <div className="mt-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {searchText && (
            <h2 className="font-medium text-[#666e75] text-xl mb-3">
              Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
            </h2>
          )}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {searchText ? (
              <RenderCards
                data={searchedResults}
                title="No Search Results Found"
              />
            ) : (
              <RenderCards
                data={allPosts}
                title="No Posts Yet"
              />
            )}
          </div>
        </>
      )}
    </div>
  </section>
  </div>
  </>
   
);
};

export default Home;