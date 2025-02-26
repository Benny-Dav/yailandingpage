import React from 'react'

import frofish from "../assets/images/frofish.jpg"

const HeroSection = () => {
  return (
    <section id="home" className='h-[70vh] md:h-[60vh] lg:h-[100vh] w-full bg-[#F9FAFC] px-8 lg:px-18 pt-12 lg:pt-10 overflow-y-hidden bg-cover bg-no-repeat bg-center relative' style={{backgroundImage:`url(${frofish})`}}>
     
        {/* dark overlay */}
        <div className='absolute top-0 left-0 w-full h-full z-20' style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

        </div>
      {/* header text */}
      <div className=' lg:w-[70%] flex flex-col py-4 text-center lg:text-justify gap-8 md:gap-16 lg:gap-4 lg:pt-24 '>
    <h1 className='z-30 text-5xl font-extrabold text-[white] lg:text-black'>Revolutionizing Fish Preservation with Affordable Eco-Fridges</h1>
    <p className='z-30 bg-white text-lg lg:text-base lg:w-[60%]'>Innovative, cost-effective, and sustainable refrigeration—empowering fishers to preserve their catch and maximize profits</p>
    <a href="#product" className='z-20'>
    <button className='z-30 cursor-pointer w-36 px-4 py-2 bg-[#15768C] mx-auto lg:mx-0 text-white rounded-sm font-semibold hover:border-2 '>
      Learn more
    </button>
    </a>
      </div>

    </section>
  )
}

export default HeroSection