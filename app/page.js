"use client";
import Lottie from "lottie-react";
import space1 from "../public/space-8.json";
import space2 from "../public/space-2.json";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { motion } from "framer-motion";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);

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
    }, 3500);
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
    <div className='flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row lg:w-[80%]'>
        <div className='w-1/2 lg:h-[80vh] flex flex-col items-center justify-center '>
          <div
            className='flex items-center'
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
            <h1 className='text-2xl lg:text-6xl font-black tracking-wide'>
              Innovatia 2.0
            </h1>
            <Lottie animationData={space2} className='w-[130px]' />
          </div>
        </div>
        <div className='w-1/2 relative'>
          <Lottie
            animationData={space1}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[500px]'
          />
        </div>
      </div>
      <motion.div
        className='custom-cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}
