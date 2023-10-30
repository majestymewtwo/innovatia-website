'use client';
import Lottie from "lottie-react"
import data from "../public/space-6.json"

export default function NotFound(){
    return (
      <main className='bg-[#1C3342] min-h-screen flex justify-center items-center'>
        <Lottie animationData={data} className="w-[600px]" />
      </main>
    );
}