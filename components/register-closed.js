"use client";
import Lottie from "lottie-react";
import data from "../public/space-registration-closed.json";
import GoBack from "./GoBack";

export default function RegistrationClosed() {
  return (
    <div className='text-white min-h-[90vh] flex flex-col items-center justify-center text-center'>
      <Lottie animationData={data} className='w-[250px] lg:w-[400px] mx-auto' />
      <h1 className='inline-block text-3xl font-black tracking-tight text-transparent md:p-3 md:pt-0 md:text-4xl animate-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text'>
        Registrations Closed, Thanks for visiting!
      </h1>
      <GoBack path='/' />
    </div>
  );
}
