import React, { useState,useEffect} from 'react'
import menu from "../assets/icons/menu.png"
import { smoothScroll } from '../smoothScroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   
  const [activeSection, setActiveSection]=useState("home")

  //to handle link clicks
  const handleLinkClick=(e,targetId)=>{
    e.preventDefault();
    smoothScroll(e,targetId);
    setActiveSection(targetId.substring(1));
    setIsOpen(false);
  }

  //close mobile menu when clicked outside
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
    <nav className='h-16  flex justify-between items-center px-6 w-full fixed top-0 left-0 z-50 bg-white shadow-lg'>
      {/* logo */}
      <a href="#home"><h1 className='text-2xl font-extrabold text-[#15768C]'>fish.</h1></a>
      {/* menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button lg:hidden">
  <img src={menu} alt="" className='w-6' />
</button>


      {/* lg menu */}
      <nav className='hidden ml-[50%] lg:flex justify-between items-center w-full'>
      <ul className="flex justify-between items-center gap-8 font-semibold pt-2">
          {["home", "product", "innovator", "showcase", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => handleLinkClick(e, `#${link}`)}
              className={`pb-2 ${
                activeSection === link ? "text-[#15768C] border-b-2 border-[#15768C]" : "hover:text-[#15768C]"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </ul>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <div className="mobile-menu h-[40%]  w-[40%] border fixed top-12 right-6 px-4 py-4 bg-white shadow-lg">
          <ul>
            {["home", "product", "innovator", "showcase", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => handleLinkClick(e, `#${link}`)}
                className={`block mb-4 border-b w-24 ${
                  activeSection === link ? "text-[#15768C] font-bold" : "hover:text-[#15768C]"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
   

export default Navbar