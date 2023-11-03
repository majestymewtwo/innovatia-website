"use client";
import MemberCard from "@/components/team/MemberCard";
import React, { useEffect } from "react";
import team1 from "../../public/team1.json"; // Import the animation JSON file
import { unHideHamButton } from "../utils/utils";
import "./page.css";

function Page() {
  // Data for team members
  const teamMembers = [
    { name: "Muthu Aanand", role: "Developer", animationData: team1 },
    { name: "Ruthi Shankari", role: "Designer and Developer" },
    { name: "Guru Sanjay", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Ruthi", role: "Designer and Developer", animationData: team1 },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    { name: "Yogesh", role: "Developer" },
    // Add more team members as needed
  ];

  return (
    <>
      <div className='lg:flex lg:w-[100vw] lg:min-h-[100vw] lg:justify-center font-sans'>
        <div className='absolute left-1/2 -translate-x-1/2 -translate-y/2 md:absolute md:top-2 pt-20 text-2xl md:text-3xl md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
          <h3 className='inline-block p-3 pt-0 text-4xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight'>
            Our Team
          </h3>
        </div>
        <div className='grid grid-cols-2 justify-center md:grid md:grid-cols-4 lg:w-4/5 md:gap-1'>
          {teamMembers.map((member, index) => (
            <div id='section' className=' ' key={index}>
              <MemberCard
                name={member.name}
                role={member.role}
                animationData={member.animationData}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;
