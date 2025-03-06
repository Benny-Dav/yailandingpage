import React, { useState } from 'react';
import { motion } from 'framer-motion';
import nextblue from "../assets/icons/next.png";
import bullet from "../assets/icons/bullet.png";
import fish1 from "../assets/images/fish1.jpg";
import fish2 from "../assets/images/fish2.jpg";
import fish3 from "../assets/images/fish3.jpg";

const AboutProduct = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => (prevStep + 1) % sections.length);
  };

  const sections = [
    {
      title: "How it came about",
      image: fish1,
      content: (
        <>
          <p className='text-left'>
            The idea was born out of the pressing challenge of post-harvest losses in the fishing industry, where a significant portion of the catch goes to waste due to inadequate preservation.
          </p>
          <p className='text-left'>   Observing the abundance of discarded barrels at the fishing harbor, Ali Davis Desmond saw an opportunity to:</p>
          <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex items-start gap-2 text-left'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Repurpose these materials into low-cost refrigerators.
            </li>
            <li className='flex items-start gap-2 text-left'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Provide an accessible and eco-friendly solution for fisher folks.
            </li>
            <li className='flex items-start gap-2 text-left'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Reduce wastage of fish and post-harvest losses.
            </li>
          </ul>
        </>
      )
    },
    {
      title: "How it works",
      image: fish2,
      content: (
        <>
          <p className='text-left'>
            The repurposed barrels are insulated and modified into functional refrigerators that can store fish for extended periods.
          </p>
          <p className='text-left'>Using a combination of cooling technology and insulation, these fridges help maintain optimal temperatures to slow spoilage.</p>
          <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex items-start gap-2'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Designed to be cost-effective.
            </li>
            <li className='flex items-start gap-2'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Requires minimal energy input.
            </li>
            <li className='flex items-start gap-2 text-left'>
              <img src={bullet} alt="" className='h-5 mt-1' /> Suitable for small-scale and large-scale fishers alike.
            </li>
          </ul>
        </>
      )
    },
    {
      title: "How it benefits the user",
      image: fish3,
      content: (
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 '>
            <img src={bullet} alt="" className='h-5 mt-1' />
            <p className='text-left'>Reduces Post-Harvest Losses: Preserves fish for longer, minimizing waste and increasing profits.</p>
          </div>
          <div className='flex gap-2'>
            <img src={bullet} alt="" className='h-5 mt-1' />
            <p className='text-left'>Cost-Effective: Provides an affordable alternative to expensive refrigeration units.</p>
          </div>
          <div className='flex gap-2'>
            <img src={bullet} alt="" className='h-5 mt-1' />
            <p className='text-left'>Eco-Friendly: Repurposes waste materials, promoting sustainability.</p>
          </div>
          <div className='flex gap-2'>
            <img src={bullet} alt="" className='h-5 mt-1' />
            <p className='text-left'>Improves Market Opportunities: Allows fishers to store fish longer, enabling better pricing and market access.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="product" className='w-full h-[60vh] lg:h-[90vh] flex flex-col lg:flex-row-reverse items-center px-6 lg:px-20 py-12 bg-no-repeat bg-cover bg-center lg:gap-12 '>
      
      {/* Left - Image Section */}
      <div className="hidden lg:block w-full h-[90%]">
        <img src={sections[step].image} alt="Product Visual" className="rounded-lg shadow-lg h-full w-full" />
      </div>

      {/* Right - Content Section */}
      <motion.div
        key={step}
        className='w-full lg:w-full p-8 rounded-lg text-center lg:text-left flex flex-col justify-center items-center lg:items-start'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Title */}
        <p className='text-lg lg:text-xl font-semibold text-gray-700'>THE FISH BARREL REFRIGERATOR</p>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
          {sections[step].title}
        </h3>

        {/* Content */}
        <div className='mt-4 text-gray-700 text-sm lg:text-base'>
          {sections[step].content}
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className='mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition hover:cursor-pointer mx-auto'>
         
          <img src={nextblue} alt="Next" className='w-12 ' />
        </button>
      </motion.div>
    </section>
  );
};

export default AboutProduct;
