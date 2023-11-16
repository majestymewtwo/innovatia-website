import React from "react";

function Guest({ image, name, quote, role }) {
  return (
    <div className='space-y-4 text-center'>
      <h1 className='inline-block text-3xl font-black tracking-tight text-transparent md:p-3 md:pt-0 md:text-4xl animate-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text'>
        OUR CHIEF GUEST
      </h1>
      <figure className='md:flex rounded-xl p-8 md:p-0 bg-slate-800/40 w-[90%] md:w-[80%] mx-auto overflow-hidden font-poppins hover:scale-105 transition-all ease-in-out duration-300'>
        <img
          className='object-cover w-24 h-24 mx-auto rounded-full md:w-64 md:h-auto md:rounded-none'
          src={image}
          alt='chief-guest'
        />
        <div className='pt-6 space-y-4 text-center md:p-8 md:text-left'>
          <blockquote>
            <p className='text-lg font-medium md:text-justify'>{quote}</p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-xl text-blue-500'>{name}</div>
            <div className='font-light text-slate-400'>{role}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Guest;
