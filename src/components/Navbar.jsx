import React, { useState } from 'react'
import menu from "../assets/icons/menu.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='h-16  flex justify-between items-center px-6 w-full fixed top-0 left-0 z-10 bg-white'>
      {/* logo */}
      <h1 className='text-2xl font-extrabold text-[#15768C]'>fish.</h1>
      {/* menu */}
      <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
        <img src={menu} alt="" className='w-6' />
      </button>

      {/* lg menu */}
      <div className='hidden ml-[50%] lg:flex justify-between items-center w-full'>
      <ul className='flex justify-between items-center gap-8 font-semibold pt-2'>
            <li >Home</li>
            <li >About</li>
            <li >Innovator</li>
            <li >Showcase</li>
            <li >Contact</li>
          </ul>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className='h-[30%] w-[40%] border fixed top-12 right-6 px-4 py-4 bg-white'>
          <ul>
            <li className='border-b w-24 mb-4'>Home</li>
            <li className='border-b w-24 mb-4'>About</li>
            <li className='border-b w-24 mb-4'>Innovator</li>
            <li className='border-b w-24 mb-4'>Showcase</li>
            <li className='border-b w-24 mb-4'>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar