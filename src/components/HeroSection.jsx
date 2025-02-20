import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-[60vh] lg:h-[70vh] w-full bg-[#F9FAFC] flex flex-col lg:flex-row-reverse px-8 lg:px-8'>
      {/* image carousel */}
      <div className="h-[60%] lg:h-full lg:w-[60%] border">

      </div>
      {/* header text */}
      <div className='flex flex-col py-4  text-center lg:text-justify gap-2 lg:gap-4 lg:pt-24'>
    <h1 className='text-2xl font-extrabold'>Revolutionizing Fish Preservation with Affordable Eco-Fridges</h1>
    <p className=''>A brief explanation of how Ali Davis Desmond’s solution helps reduce post-harvest losses.</p>
    <button className=' w-30 px-4 py-2 bg-[#15768C] mx-auto lg:mx-0 text-white rounded-sm font-semibold'>
      Learn more
    </button>
      </div>
    </section>
  )
}

export default HeroSection