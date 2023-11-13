'use client';
import AboutSection from "@/components/about/AboutSection";
import React, { useEffect } from "react";
import { unHideHamButton } from "../utils/utils";
import QueryForm from "@/components/about/QueryForm";

const page = () => {
  useEffect(() => {
    unHideHamButton();
  }, []);
  return (
    <div>
      <AboutSection />
      <QueryForm />
    </div>
  );
};

export default page;
