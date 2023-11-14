"use client";
import Lottie from "lottie-react";
import space5 from "../public/space-5.json";

export default function LoadingFallback() {
  return (
    <div className='flex flex-col items-center justify-center bg-black/50 h-screen w-full'>
      <Lottie animationData={space5} />
      <h1 className='text-2xl font-black animate-pulse tracking-widest'>
        Processing..
      </h1>
    </div>
  );
}
