import React from 'react';
import circle from "../assets/images/circle.png";
import barrels from "../assets/images/barrels.png";

const HeroSection = () => {
   const handleLinkClick = (e, targetId) => {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({ behavior: "smooth" });
      }
   };

  return (
    <>
      <section id="home" className='h-[100vh] md:h-[60vh] lg:h-[90vh] w-full px-8 lg:px-18 pt-16 lg:pt-8 flex flex-col lg:flex-row justify-between items-center bg-cover bg-no-repeat bg-center relative bg-white overflow-x-hidden overflow-y-hidden'>
      
        {/* Header Text */}
        <div className='lg:w-full text-[black] flex flex-col py-4 gap-4 md:gap-16 lg:gap-2 w-full h-auto my-auto z-10'>
          <h1 className='text-4xl text-center lg:text-left lg:text-4xl md:text-6xl font-bold leading-tight'>
            Revolutionizing Refrigeration
          </h1>
          <p className='text-lg md:text-xl w-[80%] lg:w-full md:w-[60%] mx-auto text-center lg:text-left'>
            Sustainable Cooling from Recycled Barrels!
          </p>
          <button 
            onClick={(e) => handleLinkClick(e, "#product")} 
            className='cursor-pointer w-32 px-4 py-2 bg-[#ffe000] rounded-sm font-semibold border-2 hover:text-white ml-[30%] lg:ml-0'
          >
            Learn more
          </button>
        </div>

        {/* Header Image */}
        <div className='relative h-full w-full mt-[-25px]'>
          {/* Rotating Circle */}
          <img src={circle} alt="" className='overflow-x-visible h-full lg:h-[130%] object-cover' style={{ animation: "spin 100s linear infinite" }}/>
          {/* Barrels Image */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <img src={barrels} alt="" className='h-[80%] lg:h-[120%] w-auto cursor-pointer hover:scale-105 z-30 lg:mb-[-3em]'/>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
