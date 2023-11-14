"use client";
import Lottie from "lottie-react";
import React from "react";
import about from "../../public/space-9.json";

const AboutSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center min-h-[85vh] font-lora'>
      <Lottie className=' md:w-[900px]' animationData={about} />
      <div className='px-3 space-y-5'>
        <div className='p-5 space-y-5'>
          <h1 className='font-space text-4xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent p-2 animate-text'>
            VISION OF THE DEPARTMENT
          </h1>
          <p className='text-lg font-light tracking-wider p-2'>
            To be a pioneer in providing industry and research focused
            integrated curriculum in computer science and engineering and to
            transform young minds to sustain technically and compete globally
            with enriched, ethical and moral values to serve the nation and
            beyond.
          </p>
        </div>
        <div className='p-5 space-y-5'>
          <h1 className='font-space text-4xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent p-2 animate-text'>
            MISSION OF THE DEPARTMENT
          </h1>
          <p className='text-lg font-light tracking-wider md:text-justify p-2'>
            Department of M.Tech Computer Science and Engineering, Sri Sai Ram
            Engineering College is committed to
          </p>
          <ul className='text-lg font-light tracking-wider list-disc px-4'>
            <li>
              Accelerate the learning process by collaborating undergraduate
              fundamentals & postgraduate focused learning & research.
            </li>
            <li>
              Tie-up with industries to facilitate advanced real time projects &
              internships to bridge gaps between industry & academics.
            </li>
            <li>
              Impart research mindset to provoke innovative thoughts and be
              responsible for inventions benefitting society · Inculcate moral
              and ethical values as a part of curriculum to enable interpersonal
              skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
