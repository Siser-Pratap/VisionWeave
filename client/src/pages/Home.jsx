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


  // useGSAP(()=>{
  //   gsap.to(bg.current, {
  //     backgroundPositionX: "50%", // Moves the background horizontally
  //     duration: 10, // Duration of the animation in seconds
  //     repeat: -1, // Infinite loop
  //     ease: "linear",
  //   })
  // })




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
            <div className='w-full sm:w-auto hover:scale-110'>
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
                    className='h-full w-full object-contain '
                    
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1727459785/xiurjqhcgqsii7cglh4q.jpg"
                    alt="image 2"
                    className="h-full w-full object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1726250205/hxjn533ckxv6yvnk2xre.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain"
                  />
                  <img
                    src="https://res.cloudinary.com/di4jbsdwo/image/upload/v1731417209/xpyd4ktvj9kxg5afxqkc.jpg"
                    alt="image 3"
                    className="h-full w-full object-contain"
                  />
                </Carousel>
            </div>
        </div>
      </div>
  
  </div>
  

      








    <div className='mt-20'>
    <section className="max-w-7xl mx-auto">
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
      <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
    </div>

    <div className="mt-16">
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