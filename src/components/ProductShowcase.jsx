import React from 'react'
import fish from "../assets/icons/fish.png"
import squigly from "../assets/icons/squigly.png"
const ProductShowcase = () => {
  return (
    <section className='h-[60vh] lg:h-[90vh] flex flex-col px-8 pb-8'>
      <h2 className='font-semibold text-center'>Our Products</h2>
      {/* fish and squigly lines */}
      <div className='w-[25%] flex justify-between mx-auto'>
        <img src={squigly} alt="" className='w-8'/>
        <img src={fish} alt="" className='w-6'/>
        <img src={squigly} alt="" className='w-8'/>
      </div>
    
      <p className='text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.</p>

      {/* showcase grid */}
      <div className='grid grid-cols-2 lg:grid-cols- gap-4 h-full mb-4'>
        <div className='border'></div>
        <div className='border'></div>
        <div className='border'></div>
        <div className='border'></div>
       
      </div>
    </section>
  )
}

export default ProductShowcase