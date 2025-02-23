import React, { useState } from 'react'
import nextblue from "../assets/icons/nextblue.png"
import bullet from "../assets/icons/bullet.png"
import fish1 from "../assets/images/fish2.jpg"
import fish2 from "../assets/images/fish2.jpg"
import fish3 from "../assets/images/fish3.jpg"


const AboutProduct = () => {
  const [step,setStep]=useState(0);

  const handleNext =()=>{
    setStep((prevStep)=>(prevStep+1)%sections.length);
  }
  const sections=[
    {
      title:"How it came about",
      img:fish1,
      content:(
        <>


<p>
The idea was born out of the pressing challenge of post-harvest losses in the fishing industry, where a significant portion of the catch goes to waste due to inadequate preservation.
</p>
<p> Observing the abundance of discarded barrels at the fishing harbor, Ali Davis Desmond saw an opportunity to</p>
<ul className='flex flex-col gap-4'>
  <li className='flex justify-center items-center gap-2 '><img src={bullet} alt="" className='mt-[-16px] lg:mt-0'/> repurpose these materials into low-cost refrigerators, </li>
  <li className='flex justify-center items-center gap-2'><img src={bullet} alt="" className='mt-[-16px]'/> providing an accessible and eco-friendly solution for fisher folks.</li>
  <li className='flex justify-center items-center gap-2'><img src={bullet} alt="" className=''/>reduce wastage of fish and post-harvest losses</li>
</ul></>
      )
    },

    {
      title:"How it works",
      image:fish2,
      content:(
        <>

<p>
The repurposed barrels are insulated and modified into functional refrigerators that can store fish for extended periods. 
</p>
<p>Using a combination of cooling technology and insulation, these fridges help maintain optimal temperatures to slow spoilage. </p>
<ul className='flex flex-col gap-4'>
<li className='flex justify-center items-center gap-2'><img src={bullet} alt="" className=''/>They are designed to be cost-effective</li>  

  <li className='flex justify-center items-center gap-2'><img src={bullet} alt="" className='mt-[-16px]'/> requiring minimal energy input, making them suitable </li>

  <li className='flex justify-center items-center gap-2'><img src={bullet} alt="" className=''/> for small-scale and large-scale fishers alike.</li>
</ul>
        </>
      )
    },

    {
      title:"How it benefits the fish farmer",
      image:fish3,
      content:(
        <>
       
<p className='flex justify-between items-center gap-2'><img src={bullet} alt="" className=''/>
Reduces Post-Harvest Losses: Preserves fish for longer, minimizing waste and increasing profits.
</p>
<p className='flex justify-between items-center gap-2'><img src={bullet} alt="" className=''/> Cost-Effective: Provides an affordable alternative to expensive refrigeration units.</p>
<p className='flex justify-between items-center gap-2'><img src={bullet} alt="" className=''/>Eco-Friendly: Repurposes waste materials, promoting sustainability.</p>
<p className='flex justify-between items-center gap-2'><img src={bullet} alt="" className=''/>Improves Market Opportunities: Allows fishers to store fish longer, enabling better pricing and market access.</p>
{/* <ul>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
</ul> */}
</>
      )
    }
  ]
  return (
    <section className='h-[60vh] lg:h-[90vh] px-8 pt-8 lg:flex z-20 lg:px-18'>
      {/* problem statement display */}
      <div className=' flex flex-col h-full py-2 gap-4 lg:w-[60%] lg:pr-20'>
      <p className='font-semibold text-[#15768C]'>About</p>
      <h3 className='font-semibold text-lg'>{sections[step].title}</h3>
      {sections[step].content}
      <button onClick={handleNext} className='flex w-16 mx-auto cursor-pointer'>
        <img src={nextblue} alt="" className='mx-auto'/>
      </button>
      </div>

      {/* image only visible in lg screen */}
      <div className='hidden lg:flex w-[40%] '>
        <img src={sections[step].image} alt="" />
      </div>
    </section>
  )
}

export default AboutProduct