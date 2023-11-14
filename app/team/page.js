"use client";
import MemberCard from "@/components/team/MemberCard";
import React, { useEffect } from "react";
import team1 from "../../public/team1.json"; // Import the animation JSON file
import { unHideHamButton } from "../utils/utils";
import "./page.css";

function Page() {
  // Data for team members
  const teamMembers = [
    {
      name: "Dr M Nithya",
      role: "Head Of The Department",
      image: "/nithya.jpeg",
    },
    {
      name: "Nandini Devi S",
      role: "Staff Coordinator",
      image: "/nandini.jpeg",
    },
    {
      name: "Shiny S",
      role: "Staff Coordinator",
      image: "",
    },
    {
      name: "Yuvaraj G",
      role: "Staff Coordinator",
      image: "/yuvaraj.jpeg",
    },
    {
      name: "Muthu Aanand S U",
      role: "Designer & Developer",
      image: "/muthu.jpg",
      github: "https://github.com/majestymewtwo",
      instagram: "https://www.instagram.com/mew2uwu/",
      linkedin: "https://www.linkedin.com/in/muthu-aanand-su-b36188218/",
    },
    {
      name: "Ruthi Shankari S",
      role: "Designer & Developer",
      image: "/ru.jpeg",
      github: "https://github.com/Ex-rockstar",
      linkedin: "https://www.linkedin.com/in/ruthi-shankari/",
      instagram: "https://www.instagram.com/thenameisruthi/",
    },
    {
      name: "Guru Sanjay R K",
      role: "Designer & Developer",
      image: "/gs.jpg",
      github: "https://github.com/gurusanjay2322",
      linkedin: "https://www.linkedin.com/in/guru-sanjay-r-k-4b15b3230/",
      instagram: "https://www.instagram.com/__.gs.__22/",
    },
    {
      name: "Yogesh M ",
      role: "Developer",
      image: "/Yogesh.jpeg",
      github: "https://github.com/Yogesh251103",
      instagram: "https://www.instagram.com/yogesh._10._/",
      linkedin: "https://www.linkedin.com/in/yogesh-m-16ab20216/",
    },
    {
      name: "Karthikeyan",
      role: "Developer",
      image: "/karthi.jpeg",
      role: "Developer",
      github: "https://github.com/keyan5",
      instagram: "https://www.instagram.com/iiam_karthikeyan/",
      linkedin: "https://www.linkedin.com/in/keyan5/",
    },
    {
      name: "Kamalesh Kumar",
      role: "Developer",
      image: "/kamalesh.jpeg",
      role: "Developer",
      github: "https://github.com/xterious",
      instagram: "https://www.instagram.com/ig_xterious/",
      linkedin: "https://www.linkedin.com/in/kamalesh-kumar-33a6a5222/",
    },
    {
      name: "Aadithya S",
      role: "Jr.Developer",
      image: "/aadithya.jpeg",
      role: "Jr.Developer",
      github: "https://github.com/AadithyaSJ",
      instagram: "https://www.instagram.com/a_adithya_7",
      linkedin: "https://www.linkedin.com/in/s-j-aadithya-80a551257/",
    },
    {
      name: "Koushik Babu",
      role: "Jr.Developer",
      image: "/koushik.jpeg",
      role: "Jr.Developer",
      github: "https://github.com/KoushikCodesWebpages",
      instagram: "https://www.instagram.com/music_playah/",
      linkedin: "https://www.linkedin.com/in/koushik-babu-8aa71a280/",
    },
    {
      name: "Kushi Mili Mishra",
      role: "Jr.Developer",
      image: "/kushi.jpeg",
      role: "Jr.Developer",
      github: "https://github.com/KhushiMiliMishra",
      instagram: "https://www.instagram.com/khusmish1020/",
      linkedin: "https://www.linkedin.com/in/khushi-mili-mishra-98b558257",
    },
    {
      name: "Aldous Roy",
      role: "Jr.Developer",
      image: "/aldous.jpeg",
      role: "Jr.Developer",
      github: "https://github.com/Aldous-Roy",
      instagram: "https://www.instagram.com/aldous.roy",
      linkedin: "https://www.linkedin.com/in/aldous-rayappan-5150b7252/",
    },
    {
      name: "Sai Charan",
      role: "Jr.Developer",
      image: "/saicharan.jpeg",
      role: "Jr.Developer",
      github: "https://github.com/SaiCharanUvaraj",
      instagram: "https://www.instagram.com/saicharanuvi01/",
      linkedin: "https://www.linkedin.com/in/sai-charan-uvaraj-a7a561257/",
    },
  ];

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
      <div className="text-center font-sans py-12 space-y-16">
        <h3 className="inline-block p-3 pt-0 text-4xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight">
          Our Team
        </h3>
        <div className="flex flex-wrap gap-10 justify-center space-y-20 md:space-y-0 pb-16">
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              github={member.github}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;
