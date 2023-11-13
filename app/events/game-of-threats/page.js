"use client";

import { Card } from "@/components/ui/card";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import "../eventdetail.css";
import { usePathname, useRouter } from "next/navigation";
import { unHideHamButton } from "@/app/utils/utils";

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
    <section className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="flex h-[75%] w-[90%] md:h-[83%] lg:h-[80%] lg:justify-center">
        <Card className="relative w-[95%] bg-white/5 flex flex-col backdrop-blur-sm items-center h-full p-4 md:h-full lg:flex-row lg:items-start lg:pt-16 text-white space-y-4 lg:space-y-0 overflow-clip">
          <div className="flex w-full items-center justify-between flex-row-reverse h-fit md:w-1/2 lg:w-1/2 lg:h-4/5 lg:pr-6 lg:justify-center">
            <img
              src="/retro-bg.jpg"
              alt="retro-bg"
              className="rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md"
            />
            <div className="font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden">
              <p>Game</p>
              <p>Of</p>
              <p>Threats</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip">
            <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
              <p> GAME OF THREATS</p>
            </div>
            <div className="pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm">
              <p className="font-semibold">
                "Decoding Threats, Coding Solutions" Fostering a methodical
                approach to problem-solving through coding, stimulating creative
                thinking, and reinforcing logical strategies to efficiently
                tackle challenges.
              </p>
              <p>
                <span className="font-bold">Mode: </span>
                <ul>
                  <li>1st Round: Online </li>
                  <li>2nd Round: Offline </li>
                </ul>
              </p>
              <p>
                <span className="font-bold">Date and Time: </span>
                <ul>
                  <li>18th November 2023 (Online)</li>
                  <li>22nd November 2023 (Offline)</li>
                </ul>
              </p>
              <p>
                <span className="font-bold">Venue : </span>
                <ul>
                  <li>Sri Sairam Engineering College, Chennai. (Knowledge Management Lab)</li>
                </ul>
              </p>
              <p>
                <span className="font-bold">Team : </span>
                <ul>
                  <li>Group Of 2 or 3</li>
                </ul>
              </p>
              <p>
                <span className="font-bold">Reporting Time: </span>
                <ul>
                  <li>9:15 AM</li>
                </ul>
              </p>
              <p>
                <span className="font-bold">Event Time : </span>
                <ul>
                  <li>11:15 AM</li>
                </ul>
              </p>
              <span className="font-bold">Instructions: </span>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-bold">Round 1:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">
                      {" "}
                      Technical Coding Round (Online)
                    </span>{" "}
                    <br />
                    “Coding nurtures logical thinking and problem-solving
                    abilities by necessitating a structured approach to address
                    challenges through algorithms and creativity.” <br />
                    1. Participants must use a single account to access the
                    HackerRank contest.
                    <br />
                    2. The contest will take place on 18-11-2023 from 7 PM to
                    11:30 PM.
                    <br />
                    3. Share the contest link with registered participants.
                    <br />
                    4. Top teams progressing to the next round will be selected
                    based on performance.
                  </div>
                </li>
                <li>
                  <span className="font-bold">Round 2:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">
                      Data Privacy Detox (Offline)
                    </span>
                    <br />
                    “Defend your digital kingdom in the 'Game of Threats' or
                    risk being a victim of the cyber dragons.” <br />
                    1. Participants will be provided with social media accounts
                    of a person.
                    <br />
                    2. Surf the accounts to extract data footprints of the
                    individual.
                    <br />
                    3. Utilize the data to discover login credentials (username,
                    password), security questions, and an OTP.
                    <br />
                    4. Look for information such as hobbies, interests, or
                    personal details in GitHub repositories.
                    <br />
                    5. Solve the challenge within the stipulated time frame at
                    Beta Hall, Sri Sairam Engineering College, Chennai.
                    <br />
                    WINNERS: Team who solves the challenge first wins the
                    competition.
                  </div>
                </li>
              </ul>
              <p>
                <span className="font-bold">Venue: </span>Knowledge Management Lab
              </p>
              <p className="font-bold">
                Last Date for Registration: 18.11.2023(11:00 AM)
              </p>
              <p>
                <span className="font-bold">Whatsapp Group Link : </span>{" "}
                <a href="" target="_blank">
                  Join Game Of Threats!
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5">
            <p className="text-sm font-semibold">Student Coordinator</p>
            <p className="text-sm">+91 82482 72707 - VAISHNAVI S</p>
            <p className="text-sm">+91 94897 14682 - PRAJITH B</p>
            <p className="text-sm font-semibold">Staff Coordinator</p>
            <p className="text-sm"> +91 97907 03366 - Mr. LAKSHMINARAYAN</p>
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
  );
};

export default EventDetailDB;
