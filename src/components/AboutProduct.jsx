import React, { useState } from 'react'
import nextblue from "../assets/icons/nextblue.png"
const AboutProduct = () => {
  const [step,setStep]=useState(0);

  const handleNext =()=>{
    setStep((prevStep)=>(prevStep+1)%sections.length);
  }
  const sections=[
    {
      title:"How it came about",
      content:(
        <>


<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, ea quos magnam, corrupti quae in nihil eos doloribus.
</p>
<p> saepe repudiandae impedit recusandae laboriosam temporibus aspernatur ex aliquid molestiae? Maxime.</p>
<ul>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
</ul></>
      )
    },

    {
      title:"How it works",
      content:(
        <>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, ea quos magnam, corrupti quae in nihil eos doloribus.
</p>
<p> saepe repudiandae impedit recusandae laboriosam temporibus aspernatur ex aliquid molestiae? Maxime.</p>
<ul>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
</ul>
        </>
      )
    },

    {
      title:"How it benefits fish farmer",
      content:(
        <>
       
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, ea quos magnam, corrupti quae in nihil eos doloribus.
</p>
<p> saepe repudiandae impedit recusandae laboriosam temporibus aspernatur ex aliquid molestiae? Maxime.</p>
<ul>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
  <li> saepe repudiandae impedit recusandae </li>
</ul>
</>
      )
    }
  ]
  return (
    <section className='h-[50vh] lg:h-[90vh] px-8 pt-8 lg:flex '>
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
      <div className='hidden lg:flex w-[40%] border'>

      </div>
    </section>
  )
}

export default AboutProduct