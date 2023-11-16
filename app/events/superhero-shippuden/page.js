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
    link.download = `superhero-shippuden-brochure.jpg`;
    link.href = "/superhero-shippuden-brochure.jpg";
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
    <section className="md:h-screen w-[100vw] flex justify-center items-center py-24 md:py-0">
      <div className="flex min-h-auto w-[90%] md:h-[83%] lg:h-[80%] lg:justify-center">
        <Card className="relative w-full bg-white/5 flex flex-col backdrop-blur-sm items-center h-full p-4 md:h-full md:w-[95%] lg:flex-row lg:items-start lg:pt-8 text-white space-y-4 lg:space-y-0 overflow-clip">
          <div className="flex w-full items-center justify-between flex-row-reverse h-fit md:w-1/2 lg:w-1/2 lg:h-4/5 lg:pr-6 lg:justify-center">
            <img
              src="/Superhero-Shippuden.png"
              alt="superhero-shippuden"
              className="rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md"
            />
            <div className="font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden">
              <p>Superhero</p>
              <p>Shippuden</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip">
            <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
              <p>SUPERHERO SHIPPUDEN</p>
            </div>
            <div className="pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm">
              <p className="font-semibold">
                "Unleash Your Superpower Fusion" To celebrate and test the
                knowledge of diverse superhero and anime fandoms while fostering
                teamwork and creativity.
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
                    Venue: Sri Sairam Engineering College, Chennai. (Gamma hall
                    - Superhero shippuden)
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Team : </span>
                <ul>
                  <li>Group Of 2 or 3</li>
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
                    <span className="font-bold">ONLINE QUIZ</span> <br />
                    <div className="ml-5">
                      <span className="font-bold"> Free for All Quiz</span>{" "}
                      <br />
                      1. Mixed Questions: Prepare a mix of questions from
                      comics, anime.<br />
                      2. Pass Option: If a team can't answer, the question
                      passes to the next team.
                      <br />
                      <span className="font-bold">
                        Scene Identification Challenge
                      </span>{" "}
                      <br />
                      1. Number Selection: Teams pick numbers within a specific
                      range.
                      <br />
                      2. Video-Based Questions: Videos play scenes in ¼ screen.
                      <br />
                      3. Goal: Teams identify the character and series based on
                      the scene
                      <br />
                      4. Top teams will be shortlisted to the offline rounds to
                      be held on 22nd
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">Round 1:</span> <br />
                    <div className="ml-5">
                      <span className="font-bold">Series Name Guessing</span>{" "}
                      <br />
                      1. Team member silently gestures series/movie name.
                      <br />
                      2. Others guess while listening to loud music on
                      headphones.
                      <br />
                      3. Teams will be awarded points based on their guesses
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">Round 2:</span> <br />
                    <div className="ml-5">
                      <span className="font-bold">Chuunin Exams Event</span>
                      <br />
                      1. Test Format: Pen and paper MCQ test.
                      <br />
                      2. Topics: Series and anime knowledge assessment.
                    </div>
                  </li>
                  <li>
                    <span className="font-bold">Round 3:</span> <br />
                    <div className="ml-5">
                      <span className="font-bold">Shipwreck Scenario</span>
                      <br />
                      1. Hypothetical Situation: Ship sinking, one life jacket
                      available. <br />
                      2. Character Impersonation: Participants embody characters
                      (anime, Marvel, DC).
                      <br />
                      3. Three Rounds: Shortlisting rounds and a final showdown.
                      <br />
                    </div>
                  </li>
                  <li>
                    WINNER : Team with the highest overall score wins the
                    competition.
                  </li>
                  <li>
                  Every Participant is Required to join the whatsapp group from the link provided below!
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-bold">Venue: </span>Gamma Hall
              </div>
              <p className="font-bold">
                Last Date for Registration: 17.11.2023(12:00 PM)
              </p>
              <div>
                <span className="font-bold">Whatsapp Group Link : </span>{" "}
                <a href='https://chat.whatsapp.com/GgicRjZMoJ7BC2wNEIfmQy' target='_blank'>
                  Join Superhero Shippuden!
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5">
            <p className="text-sm font-semibold">Student Coordinator</p>
            <p className="text-sm">+91 9486308851 - RUTHI SHANKARI S</p>
            <p className="text-sm">+91 9003268427 - GURU SANJAY R K</p>
            <p className="text-sm font-semibold">Staff Coordinator</p>
            <p className="text-sm">+91 99622 75202 - Mrs.SHINY A</p>
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
