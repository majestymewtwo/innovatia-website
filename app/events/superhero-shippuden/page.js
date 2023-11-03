'use client'

import { Card } from "@/components/ui/card";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import "../eventdetail.css";
import { usePathname, useRouter } from "next/navigation";

const EventDetail = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `space-bg-1.jpg`;
    link.href = ".";
    link.click();
  };

  const router = useRouter();

  const pathName = usePathname();

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
              <p>Superhero
              </p>
              <p>Shippuden</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 h-3/5 lg:w-1/2 lg:h-4/5  lg:items-left overflow-y-clip">
            <div className="hidden font-oswald text-2xl text-left text-[#EF8354] lg:text-4xl lg:block">
              <p>
              Superhero Shippuden
              </p>
            </div>
            <div className="pr-2 space-y-2 overflow-y-scroll scrollbar lg:text-sm">
              <p className="font-semibold">
                Unique, United and Unyielding. Compose your designs with bags of
                characters to make the trophy your winning glory. 
              </p>
              <p>
                <span className="font-bold">Mode: </span>Both Online and Offline
              </p>
              <p>
                <span className="font-bold">Date and Time: </span>22 nd November
                - 9:30 AM
              </p>
              <span className="font-bold">Instructions: </span>
              <ul className="list-disc list-inside">
                <li>Allowed tools: Figma, Adobe XD.</li>
                <li>
                  Duration- 2 days (Round 1- Online, Round 2 & 3 - Offline).
                </li>
                <li> Team should consist of 2 members.</li>
                <li>
                  Duration- 2 days (Round 1- Online, Round 2 & 3 - Offline).
                </li>
                <li> Team should consist of 2 members.</li>
                <li>
                  Duration- 2 days (Round 1- Online, Round 2 & 3 - Offline).
                </li>
                <li> Team should consist of 2 members.</li>
              </ul>
              <p>
                <span className="font-bold">Venue: </span>Gamma Hall
              </p>
              <p className="font-bold">
                Round 1-(Duration: 1.5 hours, Online on Discord)
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Participants will be given distinct problem statements to
                  design Three pages of a web applications.
                </li>
                <li>
                  The registered teams will further be grouped together, top 3
                  teams from each group will be selected to Round 2.
                </li>
              </ul>
              <p className="font-bold">
                Round 2-(Duration: 45 minutes, Offline)
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Teams moved to this round will be given a problem statement to
                  design a Logo.
                </li>
                <li>
                  {" "}
                  If needed both the team members can work simultaneously on
                  their respective Laptops.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start lg:w-auto lg:absolute lg:bottom-10 lg:left-5">
            <p className="text-sm font-semibold">
              Contact
             </p> 
            <p className="text-sm">
            +91 87545 12892 - Yogesh M
             </p> 
            <p className="text-sm">
            +91 97890 27587 - Muthu Aanand S U
             </p>
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
              className="border w-1/2 p-4 border-gray-300 hover:bg-[#E97451]  " onClick={onDownload}
            >
              View Brochure
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventDetail