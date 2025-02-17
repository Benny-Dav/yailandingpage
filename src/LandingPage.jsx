import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutProduct from './components/AboutProduct'
import AboutInnovator from './components/AboutInnovator'
import ProductShowcase from './components/ProductShowcase'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutProduct/>
        <AboutInnovator/>
        <ProductShowcase/>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}

export default LandingPage