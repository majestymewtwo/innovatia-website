"use client";
import Lottie from "lottie-react";
import space1 from "../public/space-1.json";
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
      // backgroundColor: "#fff",
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

  // if (suspense) return <Loading />;

  return (
    <main
      id="app"
      className="flex min-h-screen flex-col items-center justify-between relative"
    >
      <div className="flex w-[80%]">
        <div className="w-1/2 h-[80vh] flex flex-col items-center justify-center ">
          <div className="flex items-center hover:scale-110 transition-all ease-in-out duration-300 delay-150 ">
            <h1 className="text-6xl tracking-wide">Innovatia 2.0</h1>
            <Lottie animationData={space2} className="w-[130px]" />
          </div>
          <motion.div
            className="custom-cursor"
            variants={variants}
            animate={cursorVariant}
          />
          {/* <button className="btn-custom hover:scale-110 transition-all duration-200 delay-150 cursor-none">
            Explore
          </button> */}
        </div>
        <div className="w-1/2 h-[60vh]">
          <Lottie animationData={space1} className="absolute w-[500px]" />
        </div>
      </div>
      {/* Events */}
      <section className="px-36 py-16 bg-[#00053C] space-y-12">
        <div>
          <h1 className="text-3xl tracking-wider">About Us</h1>
          <p className="font-sans font-semibold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            excepturi sequi dicta ipsa quas eveniet aliquid voluptates
            perspiciatis ipsum voluptas, dignissimos soluta magni consequatur
            rem non, minus unde, recusandae magnam? Delectus, temporibus. Ipsa
            atque sit inventore, modi nobis sunt? Et?
          </p>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h1 className="text-3xl tracking-wider">About Us</h1>
          <p className="font-sans font-semibold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            excepturi sequi dicta ipsa quas eveniet aliquid voluptates
            perspiciatis ipsum voluptas, dignissimos soluta magni consequatur
            rem non, minus unde, recusandae magnam? Delectus, temporibus. Ipsa
            atque sit inventore, modi nobis sunt? Et?
          </p>
        </div>
        <div>
          <h1 className="text-3xl tracking-wider">About Us</h1>
          <p className="font-sans font-semibold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            excepturi sequi dicta ipsa quas eveniet aliquid voluptates
            perspiciatis ipsum voluptas, dignissimos soluta magni consequatur
            rem non, minus unde, recusandae magnam? Delectus, temporibus. Ipsa
            atque sit inventore, modi nobis sunt? Et?
          </p>
        </div>
        <div>
          <h1 className="text-3xl tracking-wider">About Us</h1>
          <p className="font-sans font-semibold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            excepturi sequi dicta ipsa quas eveniet aliquid voluptates
            perspiciatis ipsum voluptas, dignissimos soluta magni consequatur
            rem non, minus unde, recusandae magnam? Delectus, temporibus. Ipsa
            atque sit inventore, modi nobis sunt? Et?
          </p>
        </div>
        <div>
          <h1 className="text-3xl tracking-wider">About Us</h1>
          <p className="font-sans font-semibold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            excepturi sequi dicta ipsa quas eveniet aliquid voluptates
            perspiciatis ipsum voluptas, dignissimos soluta magni consequatur
            rem non, minus unde, recusandae magnam? Delectus, temporibus. Ipsa
            atque sit inventore, modi nobis sunt? Et?
          </p>
        </div>
      </section>
    </main>
  );
}
