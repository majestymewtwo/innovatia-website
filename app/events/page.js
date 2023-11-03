"use client";
import EventTiles from "@/components/events/EventTiles";
import { useEffect } from "react";
import { unHideHamButton } from "../utils/utils";

export default function Events() {
  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <main className='h-screen'>
      <div className='flex flex-col items-center justify-center font-sans md:h-1/6 pt-4 md:pt-0'>
        <h1 className='inline-block p-3 pt-0 text-4xl md:text-7xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight'>
          Symposium Events
        </h1>
      </div>
      <div className='md:h-5/6 flex justify-center p-3'>
        <EventTiles />
      </div>
    </main>
  );
}
