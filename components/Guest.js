import React from 'react'

function Guest() {
  return (
    <section className='flex flex-col-reverse md:flex-row'>
    <div className='flex flex-col items-start justify-center space-y-8 p-4 md:w-1/2'>
      <h1 className='font-bold text-5xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent p-2 animate-text'>
        Chief Guest
      </h1>
      <div className='p-6 m-2 space-y-4 text-justify rounded md:w-[100%] md:mr-10 bg-white/5 backdrop-blur-md font-poppins'>
        Name
      </div>
    </div>
    <img src="/muthulakshmi.jpg" alt="" />
    </section>
  )
}

export default Guest
