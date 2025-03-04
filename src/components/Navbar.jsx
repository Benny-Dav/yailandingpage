import React, { useState, useEffect } from 'react';
import menu from "../assets/icons/menu.png";
import { smoothScroll } from '../smoothScroll';
import kwlogo from "../assets/icons/kwlogo.png";
import tkyt from "../assets/icons/tkyt.png"
import fbyt from "../assets/icons/fbyt.png"
import wayt from "../assets/icons/wayt.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle link clicks
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(e, targetId);
    setActiveSection(targetId.substring(1));
    setIsOpen(false);
  };

  // Close mobile menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(".mobile-menu") && !e.target.closest(".menu-button")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top black bar */}
      <div className="h-10 bg-black flex justify-between items-center px-6 py-4">
        {/* socials */}
        <div className='h-full flex justify-between items-center'>
        <Link><img src={fbyt} alt="" /></Link>
        <Link><img src={tkyt} alt="" /></Link>
        <Link><img src={wayt} alt="" /></Link>
        </div>
        {/* contact info */}
        <div className='flex justify-between items-center text-white text-sm lg:gap-6'>
          <p>
            +233 595 742 231
          </p>
          <p className='hidden lg:flex'>
            kingsway@gmail.com
          </p>
          <p className='hidden lg:flex'>
            Anaji, Takoradi
          </p>
        </div>
      </div>

      {/* Bottom white section with logo and navigation */}
      <div className="bg-white shadow-md flex justify-between items-center px-6 py-4 h-24 lg:h-18 ">
        {/* Logo */}
        <a href="#home">
          <img src={kwlogo} alt="Logo" className="h-34 mt-6" />
        </a>

        {/* Desktop menu */}
        <nav className="hidden lg:flex space-x-8">
          {["home", "product", "innovator", "showcase", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => handleLinkClick(e, `#${link}`)}
              className={`pb-2 text-gray-700 font-semibold ${
                activeSection === link ? "text-[#ffe000] border-b-2 border-[#ffe000]" : "hover:text-[#ffe000]"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button lg:hidden">
          <img src={menu} alt="Menu" className="w-6" />
        </button>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="mobile-menu absolute top-20 right-6 bg-white shadow-lg w-40 p-4 border rounded-lg">
            <ul>
              {["home", "product", "innovator", "showcase", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => handleLinkClick(e, `#${link}`)}
                  className={`block mb-4 border-b w-full text-gray-700 ${
                    activeSection === link ? "text-[#ffe000] font-bold" : "hover:text-[#ffe000]"
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
