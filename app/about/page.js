'use client';
import AboutSection from "@/components/about/AboutSection";
import React, { useEffect } from "react";
import { unHideHamButton } from "../utils/utils";

const page = () => {
  useEffect(() => {
    unHideHamButton();
  }, []);
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default page;
