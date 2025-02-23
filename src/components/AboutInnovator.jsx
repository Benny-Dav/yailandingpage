import React from 'react'
import innovator from "../assets/images/innovator.jpg"
const AboutInnovator = () => {
  return (
    <section className='h-[80vh] lg:h-[100vh] flex flex-col px-8 py-8 lg:flex-row lg:px-18'>
      {/* image */}
      <div className='h-[50%] lg:h-full lg:w-full border bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${innovator})`}}>

      </div>
      {/* about innovator text */}
      <div className='flex flex-col pt-4 lg:py-24 text-center'>
      <p className='font-semibold text-[#15768C] text-center mb-4 '>About</p>
      <p className='w-[80%] mx-auto'>Ali Davis Desmond, an innovative problem-solver from New Takoradi, Western Region, is dedicated to addressing challenges in the fishing industry. Passionate about sustainability and economic empowerment, he created this solution to help fisher folks maximize their harvests while reducing environmental waste.</p>
      <p className='w-[80%] mx-auto'>Ali schooled in the St. Johns secondary school where he studied General Science. He went ahead to further his education in KNUST, and graduated with a bachelor's degree in Agriculture. His hobbies include listening to music and observing animals in nature</p>
      
      </div>
    </section>
  )
}

export default AboutInnovator