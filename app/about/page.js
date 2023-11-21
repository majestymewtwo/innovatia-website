'use client';
import AboutSection from "@/components/about/AboutSection";
import React, { useEffect } from "react";
import { unHideHamButton } from "../utils/utils";
import QueryForm from "@/components/about/QueryForm";
import MapComponent from "@/components/map";

const page = () => {
  useEffect(() => {
    unHideHamButton();
  }, []);
  return (
    <div>
      <AboutSection />
      <QueryForm />
      <MapComponent />
    </div>
  );
};

export default page;
