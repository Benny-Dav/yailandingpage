import React, { useState } from 'react';
import { motion } from 'framer-motion';
import nextblue from "../assets/icons/nextblue.png";
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
          <p>
            The idea was born out of the pressing challenge of post-harvest losses in the fishing industry, where a significant portion of the catch goes to waste due to inadequate preservation.
          </p>
          <p> Observing the abundance of discarded barrels at the fishing harbor, Ali Davis Desmond saw an opportunity to</p>
          <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex gap-2 '><img src={bullet} alt="" className='h-6 mt-2' /> Repurpose these materials into low-cost refrigerators.</li>
            <li className='flex gap-2'><img src={bullet} alt="" className='h-6 mt-2' /> Provide an accessible and eco-friendly solution for fisher folks.</li>
            <li className='flex gap-2'><img src={bullet} alt="" className='h-6 mt-2' /> Reduce wastage of fish and post-harvest losses.</li>
          </ul>
        </>
      )
    },
    {
      title: "How it works",
      image: fish2,
      content: (
        <>
          <p>
            The repurposed barrels are insulated and modified into functional refrigerators that can store fish for extended periods.
          </p>
          <p>Using a combination of cooling technology and insulation, these fridges help maintain optimal temperatures to slow spoilage.</p>
          <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex gap-2'><img src={bullet} alt="" className='h-6' /> Designed to be cost-effective.</li>
            <li className='flex gap-2'><img src={bullet} alt="" className='h-6' /> Requires minimal energy input.</li>
            <li className='flex gap-2'><img src={bullet} alt="" className='h-6' /> Suitable for small-scale and large-scale fishers alike.</li>
          </ul>
        </>
      )
    },
    {
      title: "How it benefits the fish farmer",
      image: fish3,
      content: (
        <>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
              <img src={bullet} alt="" />
              <p>Reduces Post-Harvest Losses: Preserves fish for longer, minimizing waste and increasing profits.</p>
            </div>
            <div className='flex gap-2'>
              <img src={bullet} alt="" />
              <p>Cost-Effective: Provides an affordable alternative to expensive refrigeration units.</p>
            </div>
            <div className='flex gap-2'>
              <img src={bullet} alt="" />
              <p>Eco-Friendly: Repurposes waste materials, promoting sustainability.</p>
            </div>
            <div className='flex gap-2'>
              <img src={bullet} alt="" />
              <p>Improves Market Opportunities: Allows fishers to store fish longer, enabling better pricing and market access.</p>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <section id="product" className='w-full h-[90vh] flex justify-between items-center text-black px-8 lg:px-18 relative pt-8 bg-[#dbe7ff]'>


      {/* Content Section */}
      <motion.div
        key={step}
        className=' p-8 rounded-lg text-center relative flex flex-col justify-center items-center text-black lg:h-full'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}

      >
        {/* Glassy Overlay */}
        {/* <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md rounded-lg">

  </div> */}

        {/* Content */}
        <div className="relative z-10">
          <p className='text-[black] text-xl font-semibold'>THE FISH BARREL REFRIGERATOR</p>
          <h3 className="text-2xl font-semibold text-gray-800">
   {sections[step].title}
</h3>

          <div className='mt-4 text-left text-gray-600'>{sections[step].content}</div>
        </div>
      </motion.div>

      {/* Image Section */}
      <div className='w-full h-[80%] bg-cover bg-center hidden lg:flex mr-4 rounded-lg' style={{ backgroundImage: `url(${sections[step].image})` }}></div>

      {/* Next Button */}
      <div className=' w-30 h-auto'>
        <button onClick={handleNext} className='cursor-pointer h-full'>
          <img src={nextblue} alt="" className='w-12' />
        </button>
      </div>
    </section>
  );
};

export default AboutProduct;
