"use client";
import ContactUs from "@/components/contact/ContactUs";
import React, { useEffect } from "react";
import { unHideHamButton } from "../utils/utils";

function page() {
  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <div className='flex justify-center items-center text-center min-h-[85vh]'>
      <ContactUs />
    </div>
  );
}

export default page;
