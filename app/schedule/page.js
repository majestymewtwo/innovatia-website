"use client";
import Schedule from "@/components/schedule/Schedule";
import { React, useEffect } from "react";
import { unHideHamButton } from "../utils/utils";
function page() {
  useEffect(() => {
    unHideHamButton();
  }, []);
  return (
    <div className="flex justify-center items-center text-center min-h-[100vh]">
      <Schedule />
    </div>
  );
}

export default page;
