import React from 'react';
import footerbg from "../assets/images/footerbg.jpg";
import { Link } from 'react-router-dom';
import phonewhite from "../assets/icons/phonewhite.png";
import mailwhite from "../assets/icons/mailwhite.png";
import locwhite from "../assets/icons/locwhite.png";
import kwlogo from "../assets/icons/kwlogo.png"

const Footer = () => {
  return (
    <div
      className="relative bottom-0 bg-cover bg-center text-white px-8 py-10"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-2">
        {/* Logo & Tagline */}
        <div className='h-auto'>
          {/* Logo */}
                  <a href="#home">
                    <img src={kwlogo} alt="Logo" className="h-34 mx-auto " />
                  </a>
          <p className="text-sm max-w-md mx-auto">
            Revolutionizing Fish Preservation with Affordable Eco-Fridges
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex items-start gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <img src={locwhite} alt="Location" className="w-5 h-5" />
            <img src={mailwhite} alt="Email" className="w-5 h-5" />
            <img src={phonewhite} alt="Phone" className="w-5 h-5" />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <p>Takoradi Anaji</p>
            <p>alidavid@gmail.com</p>
            <p>0595742231</p>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}

        {/* Copyright */}
        <p className="text-xs text-gray-300">
          © 2025 Benedicta Davour. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
