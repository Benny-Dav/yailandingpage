import React, { useState } from 'react'
import menu from "../assets/icons/menu.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='h-16  flex justify-between items-center px-6 w-full fixed top-0 left-0 z-50 bg-white'>
      {/* logo */}
      <a href="#home"><h1 className='text-2xl font-extrabold text-[#15768C]'>fish.</h1></a>
      {/* menu */}
      <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
        <img src={menu} alt="" className='w-6' />
      </button>

      {/* lg menu */}
      <div className='hidden ml-[50%] lg:flex justify-between items-center w-full'>
      <ul className='flex justify-between items-center gap-8 font-semibold pt-2'>
            <a href="#home"><li >Home</li></a>
            <a href="#product"><li >About</li></a>
            <a href="#innovator"><li >Innovator</li></a>
            <a href="#showcase"><li >Showcase</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className='h-[30%] w-[40%] border fixed top-12 right-6 px-4 py-4 bg-white'>
          <ul className=''>
            <a href="#home"><li className='hover:text-[#15768C] border-b w-24 mb-4'>Home</li></a>
            <a href="#product"><li className='border-b w-24 mb-4'>About</li></a>
            <a href="#innovator"><li className='border-b w-24 mb-4'>Innovator</li></a>
            <a href="#showcase"><li className='border-b w-24 mb-4'>Showcase</li></a>
            <a href="#contact"><li className='border-b w-24 mb-4'>Contact</li></a>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar