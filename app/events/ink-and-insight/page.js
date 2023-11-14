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
      <section className='h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className='flex h-[75%] w-[90%] md:h-[83%] lg:h-[80%] lg:justify-center'>
          <Card className='relative w-[95%] bg-white/5 flex flex-col backdrop-blur-sm items-center h-full p-4 md:h-full lg:flex-row lg:items-start lg:pt-16 text-white space-y-4 lg:space-y-0 overflow-clip'>
            <div className='flex w-full items-center justify-between flex-row-reverse h-fit md:w-1/2 lg:w-1/2 lg:h-4/5 lg:pr-6 lg:justify-center'>
              <img
                src='/ink-&-insight.png'
                alt='ink-&-insight'
                className='rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md'
              />
              <div className='font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden'>
                <p>Ink</p>
                <p>& Insight</p>
              </div>
            </div>
            <div className='flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip'>
              <div className='hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block'>
                <p>INK AND INSIGHT</p>
              </div>
              <div className='pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm'>
                <p className='font-semibold'>
                  "Ink Your Ideas, Insight Your Impact!" To cultivate innovative
                  thinking, emphasizing the transformation of ideas into
                  practical, impactful realities, and providing a platform for
                  budding innovators to showcase their creative solutions.
                </p>
                <p>
                  <span className='font-bold'>Mode: </span>
                  <ul>
                    <li>1st Round: Online </li>
                    <li>2nd Round: Offline </li>
                  </ul>
                </p>
                <p>
                  <span className='font-bold'>Date and Time: </span>
                  <ul>
                    <li>20th November 2023 (Online)</li>
                    <li>22nd November 2023 (Offline)</li>
                  </ul>
                </p>
                <p>
                  <span className='font-bold'>Venue : </span>
                  <ul>
                    <li>
                      Sri Sairam Engineering College, Chennai. (Entrepreneurship
                      Development Cell Ink and Insight)
                    </li>
                  </ul>
                </p>
                <p>
                  <span className='font-bold'>Team : </span>
                  <ul>
                    <li>Group Of 2 or 3</li>
                  </ul>
                </p>
                <p>
                  <span className='font-bold'>Reporting Time: </span>
                  <ul>
                    <li>9:15 AM</li>
                  </ul>
                </p>
                <p>
                  <span className='font-bold'>Event Time : </span>
                  <ul>
                    <li>11:15 AM</li>
                  </ul>
                </p>
                <span className='font-bold'>Instructions: </span>
                <ul className='list-disc list-inside'>
                  <li>
                    <span className='font-bold'>Round 1:</span> <br />
                    <div className='ml-5'>
                      <span className='font-bold'> Online Submission</span>{" "}
                      <br />
                      “Innovation is more than having new ideas: it includes the
                      process of successfully introducing them or making things
                      happen in a new way. It turns ideas into useful,
                      practicable and commercial products or services.”
                      <br />
                      1. Utilize the designated Google form for idea
                      presentations.
                      <br />
                      2. Emphasize the practical implementation of new ideas.
                      <br />
                      3. Selection based on the innovation's potential impact.
                      <br />
                      4. Ensure timely submission within the set deadline.
                    </div>
                  </li>
                  <li>
                    <span className='font-bold'>Round 2:</span> <br />
                    <div className='ml-5'>
                      <span className='font-bold'>Offline Presentation</span>
                      <br />
                      1. Shortlisted teams from Round 1 are eligible for offline
                      presentations.
                      <br />
                      2. Allocate 3-5 minutes for each team's presentation.
                      <br />
                      3. Focus on practical implementation and perfection of
                      innovations.
                      <br />
                      4. Present to the judging panel for final evaluation.
                    </div>
                  </li>
                  <li>
                    WINNER : Team with the best solution to the problem
                    statement and good presentation wins the competition.
                  </li>
                </ul>
                <p>
                  <span className='font-bold'>Venue: </span>Entrepreneurship
                  Development Cell
                </p>
                <p className='font-bold'>
                  Last Date for Registration: 19.11.2023(11:00 AM)
                </p>
                <p>
                  <span className='font-bold'>Whatsapp Group Link : </span>{" "}
                  <a href='https://chat.whatsapp.com/GaEmB0HVSLr2GFtWtazIXe' target='_blank'>
                    Join Ink & Insights!
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5'>
              <p className='text-sm font-semibold'>Student Coordinator</p>
              <p className='text-sm'>+91 95621 86520 - GAUTHAM MURALI</p>
              <p className='text-sm'>+91 80560 71373 - NIVEDITHA S</p>
              <p className='text-sm font-semibold'>Staff Coordinator</p>
              <p className='text-sm'>+91 98409 48078 - Mr. M AHSAN SHARIFF</p>
            </div>
            <div className='flex flex-row justify-center w-full space-x-5 lg:w-auto lg:absolute lg:bottom-10 lg:left-1/2'>
              <Button
                variant='contained'
                className='border w-1/2 border-gray-300 hover:bg-[#E97451] text-sm '
                onClick={() => router.push(`${pathName}/register`)}>
                Register Now
              </Button>
              <Button
                variant='contained'
                className='border w-1/2 p-4 border-gray-300 hover:bg-[#E97451]  '
                onClick={onDownload}>
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
