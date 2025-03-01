import React from 'react'
import fish from "../assets/icons/fish.png"
// import fish1 from "../assets/images/fish1.jpg"
// import fish2 from "../assets/images/fish2.jpg"
// import fish3 from "../assets/images/fish3.jpg"
// import fish4 from "../assets/images/fish4.jpg"
// import fish5 from "../assets/images/fish3.jpg"
import barrel_black from "../assets/images/barrel_black.png"
import barrel_red from "../assets/images/barrel_red.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import squigly from "../assets/icons/squigly.png"
import Slider from 'react-slick'


const ProductShowcase = () => {
  var settings = {
    dots: true,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    
  };

  return (
    <section id="showcase"  className='h-[80vh] lg:h-[100vh] flex flex-col px-8 pb-8 lg:px-18 lg:pt-10 pt-8 md:mb-[50%] lg:mb-0 text-white bg-[#004080]'>
      <h2 className='font-semibold text-center text-xl text-[#ffe000]'>Our Products</h2>
      {/* fish and squigly lines */}
      <div className='w-24 flex justify-between mx-auto'>
        <img src={squigly} alt="" className='w-8'/>
        <img src={fish} alt="" className='w-6'/>
        <img src={squigly} alt="" className='w-8'/>
      </div>
    
      <p className='text-center mb-8'>Transforming Waste into Value – Explore Our Innovative, Affordable Refrigeration for Fisher Folks!</p>

      {/* showcase grid */}
      {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 h-full mb-4 lg:w-full mx-auto'>
        <div className='hover:scale-x-105'>
          <img src={fish1} className='object-cover  lg:w-100 lg:h-50 rounded-md' />
        </div>
        <div className='hover:scale-x-105'>
        <img src={fish2} alt="" className='object-cover  lg:w-100 lg:h-50 rounded-md' />
        </div>
        <div className='hover:scale-x-105'>
        <img src={fish3} alt="" className='object-cover  lg:w-100 lg:h-50 rounded-md' />
        </div>
        <div className='hover:scale-x-105'>
        <img src={fish4} alt="" className='object-cover  rounded-md  lg:w-100 lg:h-50' />
        </div>
        <div className='hover:scale-x-105'>
        <img src={fish5} alt="" className='object-cover  rounded-md  lg:w-100 lg:h-50' />
        </div>
        <div className='hover:scale-x-105'>
        <img src={fish4} alt="" className='object-cover  rounded-md  lg:w-100 lg:h-50' />
        </div>
        
       
      </div> */}
      <Slider {...settings} className='w-[60%] mx-auto'>
        <div>
          <img src={barrel_black} alt="" className='h-100 mx-auto' />
        </div>
        <div>
          <img src={barrel_red} alt="" className='mx-auto' />
        </div>
      </Slider>
    </section>
  )
}

export default ProductShowcase