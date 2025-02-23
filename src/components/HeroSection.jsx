import React from 'react'
import headerImg from "../assets/images/headerImg.png"


const HeroSection = () => {
  return (
    <section className='h-[70vh] lg:h-[100vh] w-full bg-[#F9FAFC] px-8 lg:px-18 pt-4 lg:pt-10 overflow-y-hidden'>
      <div className='flex flex-col lg:flex-row-reverse '>
        {/* image carousel */}
      <div className="h-[50%]  lg:w-[60%] mb-8" >
      <img src={headerImg} alt="" className='mt-[-20%]' />
      </div>
      {/* header text */}
      <div className='flex flex-col py-4  text-center lg:text-justify gap-4 lg:gap-4 lg:pt-24 '>
    <h1 className='text-2xl font-extrabold'>Revolutionizing Fish Preservation with Affordable Eco-Fridges</h1>
    <p className=''>Innovative, cost-effective, and sustainable refrigeration—empowering fishers to preserve their catch and maximize profits</p>
    <button className=' w-30 px-4 py-2 bg-[#15768C] mx-auto lg:mx-0 text-white rounded-sm font-semibold hover:border-2'>
      Learn more
    </button>
      </div>
      </div>
    </section>
  )
}

export default HeroSection