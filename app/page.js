"use client";
import Lottie from "lottie-react";
import space1 from "../public/space-8.json";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { motion } from "framer-motion";
import { unHideHamButton } from "./utils/utils";
import CountdownTimer from "@/components/countdown";
import SpaceButton from "@/components/SpaceButton";
import donation2LottieJson from "../public/donation2.json";
import DonationStall from "@/components/donationStall";

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
      height: 130,
      width: 130,
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
      <div className="hidden md:block" id="desktop-home">
        <main
          id="app"
          className="relative flex flex-col items-center justify-between h-screen py-12 overflow-x-hidden"
        >
          <div className="flex flex-col md:flex-row w-[80%]">
            <div className="flex flex-col items-center justify-center w-3/4 ">
              <div
                className="flex flex-col items-center space-y-4"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <h3 className="text-xl font-black tracking-widest text-white font-blanka">
                  Department Of M.Tech Computer Science & Engineering
                </h3>
                <h3 className="text-xl text-white font-inconsolata">
                  in association with
                </h3>
                <h3 className="text-2xl font-black tracking-widest text-white font-blanka">
                  Sai InfoBlitz
                </h3>
                <h3 className="text-xl text-white font-inconsolata">
                  Proudly Presents
                </h3>
                <h3 className="text-4xl md:text-9xl tracking-wider text-transparent font-bold animate-text bg-gradient-to-r from-[#0231DD] via-[#6681db] to-[#08A8A7] bg-clip-text font-space py-4">
                  INNOVATIA
                </h3>
                <SpaceButton />
                <h3 className="text-2xl text-white font-inconsolata">
                  Starts In
                </h3>
                <CountdownTimer targetDate="2023-11-22T23:59:59" />
              </div>
            </div>
            <div className="relative w-1/4">
              <Lottie
                animationData={space1}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[500px]"
              />
            </div>
          </div>
          <motion.div
            className="custom-cursor"
            variants={variants}
            animate={cursorVariant}
          />
        </main>
      </div>
      {/* MOBILE VIEW */}
      <div className="block md:hidden">
        <main
          id="app"
          className="relative flex flex-col items-center justify-between min-h-screen pt-20 overflow-x-hidden"
        >
          <div className="flex">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="flex flex-col items-center justify-center space-y-3">
                  <span className="text-center">
                    <h3 className="text-xl font-black tracking-wider text-white font-blanka">
                      Department Of M.Tech
                    </h3>
                    <h3 className="text-xl font-black tracking-wider text-white font-blanka">
                      Computer Science & Engineering
                    </h3>
                  </span>
                  <h3 className="text-lg text-white font-inconsolata">
                    in association with
                  </h3>
                  <h3 className="text-2xl font-black tracking-widest text-white font-blanka">
                    Sai InfoBlitz
                  </h3>
                </span>
                <h3 className="text-lg text-white font-inconsolata">
                  Proudly Presents
                </h3>
                <h3 className="text-6xl tracking-wider text-transparent font-bold animate-text bg-gradient-to-r from-[#0231DD] via-[#6681db] to-[#08A8A7] bg-clip-text font-space py-4">
                  INNOVATIA
                </h3>
                <h3 className="text-2xl text-white font-inconsolata">
                  Starts In
                </h3>
                <CountdownTimer targetDate="2023-11-22T23:59:59" />
                <div className="w-1/2">
                  <Lottie animationData={space1} />
                </div>
                <SpaceButton />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col-reverse items-center justify-around md:flex-row">
        <Lottie animationData={donation2LottieJson} className="w-1/2 md:w-1/3"/>
        <DonationStall />
      </div>
    </>
  );
}
