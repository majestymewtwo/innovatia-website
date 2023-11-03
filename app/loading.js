'use client';
import Lottie from "lottie-react";
import space5 from "../public/space-5.json";
import { useEffect, useLayoutEffect } from "react";

export default function Loading() {
  const hideHamButton = () => {
    const ham = document.querySelector("#ham-btn");
    if (ham) {
      ham.classList.add("hidden");
    }
  };

  useLayoutEffect(() => {
    hideHamButton();
  }, []);

  return (
    <div className='flex flex-col min-h-screen items-center justify-center bg-[#000B26]'>
      <Lottie animationData={space5} />
      <h1 className='text-2xl font-black animate-pulse tracking-widest'>
        Loading...
      </h1>
    </div>
  );
}
