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
      <div className="flex min-h-auto w-[90%] absolute top-20 md:h-[83%] lg:h-[80%] lg:justify-center">
        <Card className="relative w-full bg-white/5 flex flex-col backdrop-blur-sm items-center h-full p-4 md:h-full md:w-[95%] lg:flex-row lg:items-start lg:pt-8 text-white space-y-4 lg:space-y-0 overflow-clip">
          <div className="flex w-full items-center justify-between flex-row-reverse h-fit md:w-1/2 lg:w-1/2 lg:h-4/5 lg:pr-6 lg:justify-center">
            <img
              src="/pop-topia.png"
              alt="pop-topia"             className="rounded-md w-[150px] h-full md:w-[200px] md:h-[200px] lg:w-auto lg:h-full lg:rounded-md"
            />
            <div className="font-oswald text-4xl items-center text-[#EF8354] md:text-4xl lg:hidden">
              <p>Pop</p>
              <p>Topia</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip">
            <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
              <p>POPTOPIA - A MUSIC FESTIVAL</p>
            </div>
            <div className="pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm">
              <p className="font-semibold">
                "Where Beats Unite, and Melodies Ignite!" Uniting music
                enthusiasts, showcasing diverse genres, and providing a platform
                for emerging talents.
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
                    Sri Sairam Engineering College, Chennai. (MBA Auditorium,
                    Poptopia)
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
              <span className="font-bold">Instructions: </span>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-bold">ONLINE QUIZ</span> <br />
                  <div className="ml-5">
                    The preliminary round will take place online via Gmeet. The
                    Cinematic Quizzes, powered by the Mentimeter platform, will
                    be conducted in 1 or 2 slots based on the number of
                    registrations. Teams will compete and showcase their
                    knowledge. Approximately 15 to 20 teams will be selected
                    based on their ranking. The online quiz is scheduled for
                    17th November 2023.
                  </div>
                </li>
                <li>
                  <span className="font-bold">Round 1:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">Soundtrack Challenge</span>{" "}
                    <br />
                    1. An instrumental tune will be played in the background.{" "}
                    <br />
                    2. Use the e-buzzer provided within a time limit to answer
                    the song name.
                    <br />
                    3. First team to hit the buzzer and correctly identify the
                    song earns 1 point.
                    <br />
                    4. Teams with the highest points proceed to the next round.
                  </div>
                </li>
                <li>
                  <span className="font-bold">Round 2:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">Silent Score Cinema</span>
                    <br />
                    1.Two members (depends) receive a movie name, discuss
                    briefly, then provide a hint to the third member (depends)
                    to guess the movie. <br />
                    2. 2 minutes for the third (depends) member to identify the
                    movie.
                    <br />
                    3. 5 points for each correct movie guessed within the time
                    limit.
                    <br />
                    4. Teams with the most points move on to the following round
                  </div>
                </li>
                <li>
                  <span className="font-bold">Round 3:</span> <br />
                  <div className="ml-5">
                    <span className="font-bold">Sing the Gaps</span>
                    <br />
                    1. Top 3 or 5 teams from the previous rounds. <br />
                    2. Each member receives a song with missing lyrics (1 word,
                    2 words, 3 words missing).
                    <br />
                    3. Team discussions to allocate songs and fill in the
                    missing lyrics. <br />
                    4. A total of 30 points for the team based on the
                    completeness of the lyrics (10 points per song).
                  </div>
                </li>
                <li>
                  Team with the highest overall score wins the competition.
                </li>
                <li>
                  Each round emphasizes different skills and teamwork, offering
                  an engaging and diverse challenge for the participants.
                </li>
              </ul>
              <div>
                <span className="font-bold">Venue: </span>MBA Auditorium
              </div>
              <p className="font-bold">
                Last Date for Registration: 18.11.2023(11:00 AM)
              </p>
              <div>
                <span className="font-bold">Whatsapp Group Link : </span>{" "}
                <a href='https://chat.whatsapp.com/EiLCBwumUea1rMzbGHwZKL' target='_blank'>
                  Join Poptopia!
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-5 lg:left-5">
            <p className="text-sm font-semibold">Student Coordinator</p>
            <p className="text-sm">+91 80729 24347 - PRAVEEN KUMAR K</p>
            <p className="text-sm">+91 80151 35548- SHAHANA DEVI V</p>
            <p className="text-sm font-semibold">Staff Coordinator</p>
            <p className="text-sm">+91 80988 57554 - Mr. G YUVARAJ</p>
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
