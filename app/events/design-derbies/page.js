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
    link.download = `design-derbies-brochure.png`;
    link.href = "/design-derbies-brochure.png ";
    link.click();
  };

  const router = useRouter();

  const pathName = usePathname();

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
      <div className="relative">
        <GoBack />
      </div>
      <section className="md:h-screen w-[100vw] flex justify-center items-center py-24 md:py-0">
        <div className="flex w-[90%] md:min-h-[83%] lg:h-[80%] lg:justify-center">
          <Card className="relative w-full bg-white/5 flex flex-col backdrop-blur-sm items-center min-h-full p-4 md:h-full lg:w-[89%] lg:flex-row lg:items-start lg:pt-8 text-white space-y-4 lg:space-y-0 overflow-clip">
            <div className="flex w-full items-center justify-between flex-row-reverse h-fit lg:w-2/5 lg:h-4/5 lg:pr-6 lg:justify-center">
              <img
                src="/design-derbies.png"
                alt="design-derbies"
              className="rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md"
              />
              <div className="font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden">
                <p>Design</p>
                <p>Derbies</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 h-auto lg:w-3/5 lg:h-4/5 lg:items-left md:h-1/3 md:overflow-y-clip">
              <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
                <p>Design Derbies</p>
              </div>
              <div className="pr-2 space-y-2 md:overflow-y-scroll scrollbar lg:text-sm">
                <p className="font-semibold">
                  "Where Innovation Meets Code" To challenge and showcase
                  participants' skills in web design, encouraging creativity,
                  problem-solving, and collaboration.
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
                    <li>18th November 2023 (Online)</li>
                    <li>22nd November 2023 (Offline)</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold">Venue : </span>
                  <ul>
                    <li>
                      Sri Sairam Engineering College, Chennai. (Alpha hall -
                      Design Derbies)
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold">Team : </span>
                  <ul>
                    <li>Group Of 2 </li>
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
                      Online 1st Round, Offline 2nd Round at Sri Sairam
                      Engineering College, Chennai. .
                    </li>
                    <li>
                      {" "}
                      Event Dates: 18th Nov 2023 (Online), 22nd Nov 2023
                      (Offline), 9:15 AM reporting time.
                    </li>
                    <li>
                      <span className="font-bold">Round 1:</span> <br />
                      <div className="ml-5">
                        <span className="font-bold">
                          Patchwork - The Bug Hunt & Responsive Rumble
                        </span>{" "}
                        <br />
                        1. Create a GitHub repository for submission. <br />
                        2. HTML and CSS files will be provided with errors.
                        Participants need to fix the bugs and make the code
                        responsive for mobile viewing. <br />
                        3. Quality and time of submission determine
                        qualification for the next round. <br />
                        4. Top teams with the best code and fastest submission
                        move to the next round.
                      </div>
                    </li>
                    <li>
                      <span className="font-bold">Round 2:</span> <br />
                      <div className="ml-5">
                        <span className="font-bold">
                          Component Capers - A Crazy Collection Of Creativity
                        </span>
                        <br />
                        1. Participants choose a card representing a unique web
                        component to design within a time limit. <br />
                        2. Each team member works on their acquired component.
                        <br />
                        3. Correct execution determines advancement to the final
                        round.
                        <br />
                      </div>
                    </li>
                    <li>
                      <span className="font-bold">Round 3:</span> <br />
                      <div className="ml-5">
                        <span className="font-bold">
                          AI’s Got Talent - Design Edition
                        </span>
                        <br />
                        1. Teams will request design ideas from ChatGPT,
                        describing the desired elements without coding
                        specifics. <br />
                        2. Teams have an hour to implement and complete the
                        design based on ChatGPT's provided ideas.
                      </div>
                    </li>
                    <li>
                      Winners selected based on completed website quality.
                    </li>
                    <li>
                      Judging criteria include submission quality, speed, and
                      creative execution.
                    </li>
                    <li>
                      Focus on problem-solving and creativity in web design
                      challenges.
                    </li>
                    <li>
                      {" "}
                      Ultimate prize for the winning team's innovation and
                      website quality.
                    </li>
                    <li>
                      {" "}
                      Every Participant is Required to join the whatsapp group from the link provided below!
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold">Venue: </span>Alpha Hall
                </div>
                <p className="font-bold">
                  Last Date for Registration: 18.11.2023(11:00 AM)
                </p>
                <div>
                  <span className="font-bold">Whatsapp Group Link : </span>{" "}
                  <a href='https://chat.whatsapp.com/D6yDaspRpZGEhfQFPEgGiW' className="underline" target='_blank'>
                    Join Design Derbies!
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5">
              <p className="text-sm font-semibold">Student Coordinator</p>
              <p className="text-sm">
                +91 70014 00312 - KAMALESH KUMAR SARAVANAN
              </p>
              <p className="text-sm">+91 96775 30744 - SRI DURGADEVI S</p>
              <p className="text-sm font-semibold">Staff Coordinator</p>
              <p className="text-sm">+91 88703 31628 - Mrs. S NANDHINI DEVI</p>
            </div>
            <div className="flex flex-row justify-center w-full space-x-5 lg:absolute lg:w-auto lg:bottom-10 lg:left-1/2">
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
