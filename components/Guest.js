import React from "react";

function Guest({ image, name, quote, role }) {
  return (
    <div className='text-center space-y-4'>
      <h1 className='inline-block md:p-3 md:pt-0 text-3xl md:text-4xl text-transparent font-black animate-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text tracking-tight'>
        OUR CHIEF GUEST
      </h1>
      <figure class='md:flex rounded-xl p-8 md:p-0 bg-slate-800/40 w-[90%] md:w-1/2 mx-auto overflow-hidden font-poppins hover:scale-105 transition-all ease-in-out duration-300'>
        <img
          class='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
          src={image}
          alt='chief-guest'
          width='384'
          height='512'
        />
        <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p class='text-lg font-medium'>“{quote}”</p>
          </blockquote>
          <figcaption class='font-medium'>
            <div class='text-blue-500  text-xl'>{name}</div>
            <div class='text-slate-400 font-light'>{role}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Guest;
