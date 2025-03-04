import React, { useState, useEffect } from 'react'
import innovator from "../assets/images/innovator.png"
const AboutInnovator = () => {
  const [isVisible, setIsVisible]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      const section = document.getElementById("innovator");

      if(!section) return;

      const rect = section.getBoundingClientRect();
      const triggerPoint = window.innerHeight*0.8;

      if(rect.top < triggerPoint){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll",handleScroll);
    handleScroll();

    return()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <section id="innovator" className='h-[100vh] md:h-[70vh] lg:h-[90vh] flex flex-col px-8 py-8 lg:pb-0 lg:flex-row lg:px-18 bg-white'>
      {/* image */}
      <div className='  h-[50%] lg:h-full lg:w-full rounded-xl overflow-hidden '>
      <img src={innovator} alt="Innovator" className={` ml-[10%] lg:ml-0 transition-transform duration-3000 h-full ease-out ${
            isVisible ? "translate-y-0 opacity-100 " : "translate-y-[300px] opacity-100"
          }`}/>
      </div>
     
      {/* about innovator text */}
      <div className='flex flex-col pt-4 lg:py-24  text-black text-left'>
      <p className='font-semibold text-[#ffe000] text-center mb-4 text-xl '>MEET THE INNOVATOR</p>
      <p className='w-[80%] mx-auto'>Ali Davis Desmond, an innovative problem-solver from New Takoradi, Western Region, is dedicated to addressing challenges in the fishing industry. Passionate about sustainability and economic empowerment, he created this solution to help fisher folks maximize their harvests while reducing environmental waste.</p>
      <p className='w-[80%] mx-auto'>Ali schooled in the St. Johns secondary school where he studied General Science. He went ahead to further his education in KNUST, and graduated with a bachelor's degree in Agriculture. His hobbies include listening to music and observing animals in nature</p>
      
      </div>
    </section>
  )
}

export default AboutInnovator