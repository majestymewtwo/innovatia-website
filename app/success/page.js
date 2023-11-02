"use client";
import { useEffect, useState } from "react";
import Confetti from "@/components/register/Confetti";

const Success = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="flex justify-center w-full h-screen pt-6">
        REgistratoion Successfull.
        <span>Okay</span>
      </div>
      {visible && <Confetti />}
    </>
  );
};

export default Success;
