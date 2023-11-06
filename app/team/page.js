"use client";
import MemberCard from "@/components/team/MemberCard";
import React, { useEffect } from "react";
import team1 from "../../public/team1.json"; // Import the animation JSON file
import { unHideHamButton } from "../utils/utils";
import "./page.css";

function Page() {
  // Data for team members
  const teamMembers = [
    { name: 'Muthu Aanand', role: 'Developer', image: '/muthu.jpg', github: 'https://github.com/majestymewtwo', instagram: 'https://www.instagram.com/mew2uwu/', linkedin: 'https://www.linkedin.com/in/muthu-aanand-su-b36188218/' },
    { name: 'Ruthi Shankari', role: 'Designer and Developer', image: '/ru.jpeg' , github: 'https://github.com/Ex-rockstar', linkedin: 'https://www.linkedin.com/in/ruthi-shankari/', instagram: 'https://www.instagram.com/thenameisruthi/' },
    { name: 'Guru Sanjay', role: 'Developer', image: '/gs.jpg' , github: 'https://github.com/gurusanjay2322', linkedin: 'https://www.linkedin.com/in/guru-sanjay-r-k-4b15b3230/', instagram: 'https://www.instagram.com/__.gs.__22/' },
    { name: 'Yogesh', role: 'Developer', image: '/yogesh.jpg', github: 'https://github.com/Yogesh251103', instagram: 'https://www.instagram.com/yogesh._10._/', linkedin: 'https://www.linkedin.com/in/yogesh-m-16ab20216/' },
    { name: 'Karthikeyan', role: 'Developer' },
    { name: 'Kamalesh Kumar', role: 'Developer' },
    { name: 'Aadithya S', role: 'Designer and Developer', image: '' },
    { name: 'Koushik Babu', role: 'Developer' },
    { name: 'Kushi', role: 'Developer' },
    { name: 'Aldous', role: 'Developer' },
    { name: 'Sai Charan', role: 'Developer' },
    { name: 'Harish', role: 'Developer' },
    // Add more team members as needed
  ];

  useEffect(() => {
    unHideHamButton();
  }, []);

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
                image={member.image}
                github={member.github}
                instagram={member.instagram}
                linkedin={member.linkedin}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;
