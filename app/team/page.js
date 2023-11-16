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
      image: "/Shiny.jpg",
    },
    {
      name: "Yuvaraj G",
      role: "Staff Coordinator",
      image: "/yuvaraj.jpeg",
    },
    {
      name: "Ahsan Shariff M",
      role: "Staff Coordinator",
      image: "/shariff.jpeg",
    },
    {
      name: "Lakshmi Narayanan",
      role: "Staff Coordinator",
      image: "",
    },
  ];
  const officeBearers = [
    {
      name: "Shrivani R",
      role: "Chairman , Mtech CSE",
      image: "/shrivani.jpeg",
      github: "https://github.com/Shrivani15",
      instagram: "https://instagram.com/shri_._15?igshid=YzAwZjE1ZTI0Zg==",
      linkedin: "http://www.linkedin.com/in/shrivani-r-68b1281b0",
    },{
      name: "Sriram G",
      role: "Vice Chairman , Mtech CSE",
      image: "/sriram.jpg",
      github: "",
      instagram: "  https://www.instagram.com/sriramgandhi_?igshid=MWFodHAwOTNyamkzOA%3D%3D",
      linkedin: "https://www.linkedin.com/in/sriram-gandhi-7ab794228",
    },{
      name: "Sivanesh K S",
      role: "Secretary",
      image: "/sivanesh.jpg",
      github: "https://github.com/SivaneshKS",
      instagram: "https://instagram.com/_siva07?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/sivanesh-k-s-6a9991218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },{
      name: "Prajith B",
      role: "Secretary",
      image: "/prajith.jpg",
      github: "https://github.com/Prajith143",
      instagram: "https://www.instagram.com/mysterio.praju/",
      linkedin: "https://www.linkedin.com/in/prajith-b-a7b705258/",
    },{
      name: "Hasumathi Lakshmi G",
      role: "Secretary",
      image: "/hasumathi.jpg",
      github: "https://github.com/Hasumathi",
      instagram: "https://instagram.com/hasu_mathi_?utm_source=qr&igshid=aGhycnl5dXZhaWo3",
      linkedin: "https://www.linkedin.com/in/g-hasumathi-lakshmi-489501257",
    },{
      name: "Sri Durga Devi S",
      role: "Vice Secretary",
      image: "/durga.jpg",
      github: "https://github.com/durgasara",
      instagram: "https://instagram.com/durgasaravanan28?igshid=NzZlODBkYWE4Ng==",
      linkedin: "https://github.com/durgasara",
    },{
      name: "Niveditha   S",
      role: "Vice Secretary",
      image: "/nivedha.jpg",
      github: "",
      instagram: "",
      linkedin: "",
    },{
      name: "Rishi Vel A",
      role: "Secretary",
      image: "/rishi.jpg",
      github: "https://github.com/rishivel91",
      instagram: "https://www.instagram.com/mr_deadshot_pro_001/",
      linkedin: "https://www.linkedin.com/in/rishi-vel-499689276/",
    },{
      name: "Mohammed Rizwan M",
      role: "Treasurer",
      image: "/rizwan.jpg",
      github: "https://github.com/MrRIZW",
      instagram: "https://instagram.com/rizwan.2_9?igshid=MzNlNGNkZWQ4Mg==",
      linkedin: "https://www.linkedin.com/in/mohammed-rizwan-407684246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },{
      name: "Sri Charith A G",
      role: "Treasurer",
      image: "/charith.jpg",
      github: "https://github.com/sriicharriith",
      instagram: "https://instagram.com/_ch.ari.th_?igshid=anh0dW55NTMwZmxz",
      linkedin: "https://www.linkedin.com/in/sri-charith-a-g-bb2a2622a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },{
      name: "Selva Vignesgh",
      role: "Treasurer",
      image: "/selva.jpg",
      github: "",
      instagram: "",
      linkedin: "",
    },
  ]
  const developers = [
    
    {
      name: "Muthu Aanand",
      role: "Developer",
      image: "/muthu.jpg",
      github: "https://github.com/majestymewtwo",
      instagram: "https://www.instagram.com/mew2uwu/",
      linkedin: "https://www.linkedin.com/in/muthu-aanand-su-b36188218/",
    },
    {
      name: "Ruthi Shankari",
      role: "Developer",
      image: "/ru.jpeg",
      github: "https://github.com/Ex-rockstar",
      linkedin: "https://www.linkedin.com/in/ruthi-shankari/",
      instagram: "https://www.instagram.com/thenameisruthi/",
    },
    {
      name: "Guru Sanjay",
      role: "Developer",
      image: "/gs.jpg",
      github: "https://github.com/gurusanjay2322",
      linkedin: "https://www.linkedin.com/in/guru-sanjay-r-k-4b15b3230/",
      instagram: "https://www.instagram.com/__.gs.__22/",
    },
    {
      name: "Yogesh",
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
      name: "Kamalesh",
      role: "Developer",
      image: "/kamalesh.jpeg",
      role: "Developer",
      github: "https://github.com/xterious",
      instagram: "https://www.instagram.com/ig_xterious/",
      linkedin: "https://www.linkedin.com/in/kamalesh-kumar-33a6a5222/",
    },
    {
      name: "Aadithya",
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
      name: "Kushi Mishra",
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
  ]

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
      <div className="text-center font-sans py-12 space-y-16">
        <h3 className="inline-block pt-16 md:p-3 md:pt-0 text-4xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight">
          Faculty Coordinators
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
      <div className="text-center font-sans py-12 space-y-16">
        <h3 className="inline-block p-0 m-0 md:p-3 md:pt-0 text-4xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight">
          Development Team
        </h3>
        <div className="flex flex-wrap gap-10 justify-center space-y-20 md:space-y-0 pb-16">
          {developers.map((member, index) => (
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
      <div className="text-center font-sans py-12 space-y-16">
        <h3 className="inline-block p-3 pt-0 text-4xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight">
          Office Bearers
        </h3>
        <div className="flex flex-wrap gap-10 justify-center space-y-20 md:space-y-0 pb-16">
          {officeBearers.map((member, index) => (
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
