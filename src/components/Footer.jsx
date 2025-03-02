import React from 'react'
import footerbg from "../assets/images/footerbg.jpg"
import { Link } from 'react-router-dom'
import phonewhite from "../assets/icons/phonewhite.png"
import mailwhite from "../assets/icons/mailwhite.png"
import locwhite from "../assets/icons/locwhite.png"
 
 

const Footer = () => {
  return (
    <div className='h-[35vh] lg:h-auto lg:bottom-0 bg-cover bg-center relative px-8 py-6 text-[white] flex flex-col text-center gap-4' style={{backgroundImage:`url(${footerbg})`}}>
      {/* overlay */}
       <div className='inset-0 absolute z-10' style={{background:"rgba(0,0,0,0.7)"}}></div>

        
        <div className='w-full z-30 '>
        {/* logo */}
      <h1 className='text-2xl font-extrabold mb-2'>fish.</h1>
      <p>Revolutionizing Fish Preservation with Affordable Eco-Fridges</p>
       </div>

       <div className='z-30 text-[white]'>
        {/* logo */}
        <div className='flex justify-center gap-2 items-center'>

          <div className='flex flex-col '>
          <img src={locwhite} alt="" className='w-6'/>
          <img src={mailwhite} alt="" className='w-6'/>
          <img src={phonewhite} alt="" className='w-6'/>
          </div>

          <div className='flex flex-col text-left'>
          <p>Takoradi Anaji</p>
          <p>alidavid@gmail.com</p>
          <p>0595742231</p>
          </div>
        </div>
     
       </div>

       <div className='z-30 text-[white] flex justify-between items-center w-[60%] mx-auto mb-4'>
        {/* logo */}
    
      <li className='list-none underline'><Link></Link></li>
      <li className='list-none underline'><Link></Link></li>
      <li className='list-none underline'><Link></Link></li>
       </div>
     
       

       <p className='z-30 mx-auto'>
       © 2025 Benedicta Davour. All rights reserved.</p>
    </div>

  )
}

export default Footer