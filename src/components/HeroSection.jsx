import React from 'react'
import headerImg from "../assets/images/headerImg.png"
import frofish from "../assets/images/frofish.jpg"

const HeroSection = () => {
  return (
    <section id="home" className='h-[70vh] lg:h-[100vh] w-full bg-[#F9FAFC] px-8 lg:px-18 pt-12 lg:pt-10 overflow-y-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${frofish})`}}>
     
        {/* image carousel */}
      {/* <div className="h-[50%]  lg:w-[60%] mb-8" >
      <img src={headerImg} alt="" className='mt-[-20%]' />
      </div> */}
      {/* header text */}
      <div className=' lg:w-[70%] flex flex-col py-4  text-center lg:text-justify gap-8 lg:gap-4 lg:pt-24 '>
    <h1 className='text-5xl font-extrabold'>Revolutionizing Fish Preservation with Affordable Eco-Fridges</h1>
    <p className='bg-[rgba(255,255,255,0.5)] text-lg lg:text-base lg:w-[60%]'>Innovative, cost-effective, and sustainable refrigeration—empowering fishers to preserve their catch and maximize profits</p>
    <button className=' cursor-pointer w-36 px-4 py-2 bg-[#15768C] mx-auto lg:mx-0 text-white rounded-sm font-semibold hover:border-2'>
      Learn more
    </button>
      </div>

    </section>
  )
}

export default HeroSection