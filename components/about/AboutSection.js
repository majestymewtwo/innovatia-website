'use client'
import Lottie from 'lottie-react'
import React from 'react'
import about from '../../public/about.json'


const AboutSection = () => {
  return (
    <div className='grid grid-cols-3 min-h-screen font-lora'>
    <Lottie className='items-start h-[70%] w-[70%] mt-48 ml-12 ' animationData={about}/>
    <div className='bg-white/5 m-6 mr-24 col-span-2'>  
    </div>
    </div>
  )
}

export default AboutSection