"use client";
import Lottie from "lottie-react";
import space1 from "../public/space-8.json";
import space2 from "../public/space-2.json";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { motion } from "framer-motion";
import { unHideHamButton } from "./utils/utils";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [suspense, setSuspense] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSuspense(false);
      unHideHamButton();
    }, 3000);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#FFF",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  if (suspense) return <Loading />;

  return (
    <>
      {/* Desktop VIEW */}
      <div className='md:block hidden' id='desktop-home'>
        <main
          id='app'
          className='flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden'>
          <div className='flex flex-col md:flex-row w-[80%]'>
            <div className='w-3/4 md:h-[80vh] flex flex-col items-center justify-center '>
              <div
                className='flex items-center'
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}>
                <h1 className='text-2xl md:text-6xl font-black tracking-wider'>
                  Innovatia 2.0
                </h1>
                <Lottie animationData={space2} className='w-[150px]' />
              </div>
            </div>
            <div className='w-1/4 relative'>
              <Lottie
                animationData={space1}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[500px]'
              />
            </div>
          </div>
          <motion.div
            className='custom-cursor'
            variants={variants}
            animate={cursorVariant}
          />
        </main>
      </div>
      {/* MOBILE VIEW */}
      <div className='block md:hidden'>
        <main
          id='app'
          className='flex min-h-screen flex-col items-center justify-between'>
          <div
            className='flex items-center flex-col-reverse justify-end w-full p-3'
            // className="flex items-center justify-end w-full"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <h1 className='text-5xl font-black tracking-wider'>
              Innovatia 2.0
            </h1>
            <Lottie className='w-1/2' animationData={space2} />
          </div>
          <div className='w-1/2'>
            <Lottie
              animationData={space1}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        </main>
      </div>
    </>
  );
}
