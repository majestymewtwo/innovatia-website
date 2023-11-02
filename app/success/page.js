"use client";
import { useEffect, useState } from "react";
import Confetti from "@/components/register/Success";

const Success = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="flex justify-center h-screen w-full pt-6">
        REgistratoion Successfull.
        <span>Okay</span>
      </div>
      {visible && <Confetti />}
    </>
  );
};

export default Success;
