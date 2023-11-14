"use client";

import { Card } from "@/components/ui/card";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import "../eventdetail.css";
import { usePathname, useRouter } from "next/navigation";
import { unHideHamButton } from "@/app/utils/utils";
import GoBack from "@/components/GoBack";

const EventDetailDB = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `space-bg-1.jpg`;
    link.href = ".";
    link.click();
  };

  const router = useRouter();

  const pathName = usePathname();

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
    <div className='relative'>
        <GoBack />
      </div>
    <section className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex min-h-auto absolute top-20 w-[90%] md:h-[83%] lg:h-[80%] lg:justify-center">
        <Card className="relative w-full bg-white/5 flex flex-col backdrop-blur-sm items-center h-full p-4 md:h-full md:w-[95%] lg:flex-row lg:items-start lg:pt-8 text-white space-y-4 lg:space-y-0 overflow-clip">
          <div className="flex w-full items-center justify-between flex-row-reverse h-fit md:w-1/2 lg:w-1/2 lg:h-4/5 lg:pr-6 lg:justify-center">
            <img
              src="/retro-bg.jpg"
              alt="retro-bg"
              className="rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md"
            />
            <div className="font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden">
              <p>Pixel</p>
              <p>Perfect</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip">
            <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
              <p>Pixel Perfect</p>
            </div>
            <div className="pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm">
              <p className="font-semibold">
                “Where art meets reality!” It is an illusion that photos are
                made with the camera… They are made with the eye, heart, TV, and
                head.
              </p>
              <div>
                <span className="font-bold">Mode: </span>
                <ul>
                  <li>1st Round: Online </li>
                  <li>2nd Round: Offline </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Date and Time: </span>
                <ul>
                  <li>20th November 2023 (Online)</li>
                  <li>22nd November 2023 (Offline)</li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Venue : </span>
                <ul>
                  <li>
                  Sri Sairam Engineering College, Chennai. 
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Participation : </span>
                <ul>
                  <li>Solo Participation</li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Reporting Time: </span>
                <ul>
                  <li>9:15 AM</li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Event Time : </span>
                <ul>
                  <li>11:15 AM</li>
                </ul>
              </div>
              <div>
              <span className="font-bold">Instructions: </span>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-bold">Round 1:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold"> Online Submission</span> 
                    <br />
                    1. Participants must submit a photograph taken with their mobile phones to the provided email or Google Form within the given time frame.
                    <br />
                    2.  Photographs must align with the announced themes (Themes to be disclosed on the event day).
                    <br />
                    3. Top ten photographs will be selected for the next round based on relevance to the theme and photography skills.
                  </div>
                </li>
                <li>
                  <span className="font-bold">Round 2:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">Offline Round</span>
                    <br />
                    1.  Participants will be assigned specific themes.
                    <br />
                    2. Within the allocated time, participants should take a photograph within the college premises, including a geotag.
                    <br />
                    3. Top photographs will be selected and awarded based on relevance to the theme and photography skills.
                  </div>
                </li>
              
              </ul>
              </div>
              <div>
                <span className="font-bold">Venue: </span>Sri Sairam Engineering College
              </div>
              <p className="font-bold">
                Last Date for Registration: 19.11.2023(11:00 AM)
              </p>
              <div>
                <span className="font-bold">Whatsapp Group Link : </span>{" "}
                <a href='https://chat.whatsapp.com/BphawUpKQAILFXa5nrl9Zw' target='_blank'>
                  Join Pixel Perfect!
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5">
            <p className="text-sm font-semibold">Student Coordinator</p>
            <p className="text-sm">+91 9384825144 - Abhinesh S</p>
            <p className="text-sm">+91  6380650510 - Harini S</p>
            <p className="text-sm font-semibold">Staff Coordinator</p>
            <p className="text-sm">+91 97907 03366 -  Mr. LAKSHMINARAYANAN</p>
          </div>
          <div className="flex flex-row justify-center w-full space-x-5 lg:w-auto lg:absolute lg:bottom-10 lg:left-1/2">
            <Button
              variant="contained"
              className="border w-1/2 border-gray-300 hover:bg-[#E97451] text-sm "
              onClick={() => router.push(`${pathName}/register`)}
            >
              Register Now
            </Button>
            <Button
              variant="contained"
              className="border w-1/2 p-4 border-gray-300 hover:bg-[#E97451]  "
              onClick={onDownload}
            >
              View Brochure
            </Button>
          </div>
        </Card>
      </div>
    </section>
    </>
  );
};

export default EventDetailDB;
