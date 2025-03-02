import React from 'react'

import barrels from "../assets/images/barrels.png"
import icebg from "../assets/images/icebg.mp4"
const HeroSection = () => {
  return (
    <>
    <section id="home" className='h-[70vh] md:h-[60vh] lg:h-[92vh] w-full px-8 lg:px-18 pt-12 lg:pt-10 overflow-y-hidden bg-cover bg-no-repeat bg-center relative flex flex-col bg-gradient-to-r from-blue-900 to-blue-700
'>
     
     {/* dark overlay */}
     {/* <div className='absolute top-0 left-0 w-full h-full z-20' style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

     </div> */}
   {/* header text */}
   <div className=' text-[black] lg:w-full lg:h-[20%] flex flex-col py-4 text-center gap-8 md:gap-16 lg:gap-4 lg:pt-6 z-10 '>
 <h1 className='text-white text-5xl md:text-6xl font-bold leading-tight'>Revolutionizing Refrigeration</h1>
 <p className='text-gray-200 text-lg md:text-xl mt-4 w-[80%] md:w-[60%] mx-auto'> Sustainable Cooling from Recycled Barrels!</p>
 <a href="#product" className='z-20 mx-auto'>
 {/* <button className='z-30 cursor-pointer w-36 px-4 py-2 bg-[#ffe000] mx-auto lg:mx-0 text-black rounded-sm font-semibold border-2 hover:text-white '>
   Learn more
 </button> */}
 </a>
   </div>
   
   {/* header image  */}
   <div className='w-full h-full flex justify-center items-center mt-[-36px] gap-54'>
   
     <img src={barrels} alt="" className='lg:h-full cursor-pointer hover:scale-105 '/>
     {/* <img src={barrels} alt="" className='hidden lg:flex h-[90%] cursor-pointer hover:scale-105'/> */}
     <img src={barrels} alt="" className='hidden lg:flex h-full cursor-pointer hover:scale-105'/>

     
     </div>

     
 </section>
 {/* <div className='h-[15vh] shadow-lg bg-white'>hiiii</div> */}
    </>
  )
}

export default HeroSection