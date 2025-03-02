import React from 'react'
import squigly from "../assets/icons/squigly.png"
import fish from "../assets/icons/fish.png"
import wabold from "../assets/icons/wagrey.svg"
import instabold from "../assets/icons/iggrey.svg"
import tkbold from "../assets/icons/tkgrey.svg"

const ContactInfo = () => {
  const ContactCards=[
    {id:1,
      title:"Address",
      info:"Takoradi"
    },
    {id:2,
      title:"Phone",
      info:"+233 595 743 231"
    },
    {id:3,
      title:"E-mail",
      info:"benedictadav@gmail.com"
    },
    {id:4,
      title:"Social Media",
      info:(
        <div className='flex justify-between items-center w-[50%] h-[50%] gap-4 '>
          <img src={instabold} alt="" className='w-16' />
          <img src={tkbold} alt="" className='w-16' />
          <img src={wabold} alt="" className='w-16'/>
        </div>
      )
    },
  ]
  return (
    <section id="contact" className='h-[100vh] flex flex-col bg-[#dbe7ff] w-full px-8 lg:px-16 py-8 text-[#555555]'>
      <h2 className='font-semibold text-center text-xl'>Contact Us</h2>
            {/* fish and squigly lines */}
            <div className='w-24 flex justify-between mx-auto'>
              <img src={squigly} alt="" className='w-8'/>
              <img src={fish} alt="" className='w-6'/>
              <img src={squigly} alt="" className='w-8'/>
            </div>

            <p className='text-center mb-8'>We'd love to hear from you if you want to support our business or make enquiries.</p>

            <div className='grid grid-rows-3 lg:grid-cols-3 gap-4 '>
              {
                ContactCards.map((card, index)=>{
                  return(
                    <div key={index} className='bg-white h-40 flex flex-col px-4 py-4 gap-16 rounded-lg'>
      <p>{card.title}</p>
      <h3 className='font-extrabold text-2xl '>{card.info}</h3>
      
    </div>
                  )
                })
              }
            </div>
    </section>
  )
}

export default ContactInfo