"use client";
import Lottie from "lottie-react";
import React from "react";
import about from "../../public/space-9.json";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-3 min-h-screen font-lora">
      <Lottie
        className="items-start h-full w-full mt-5 ml-12 "
        animationData={about}
      />
      <div className="col-span-2 ">
        <div className="pt-10">
        <div className=" absolute pl-[30%] -translate-x-1/2 -translate-y/2 top-32 font-space text-4xl ">
          ABOUT
        </div>
        <div className=" md:p-40 md:font-sourcesan md:text-justify  ">
          On behalf of IEEE-System Man and Cybernetics society & in association
          with SAI INFOBLITZ , the department of M.Tech CSE Organized the event
          TechFest 2022- INNOVATIA 1.0 in Beta hall on 29.12.2022 at 9.15 a.m.
          with grand success. The chief guest was Mr. Karthiq Ganesan,from Hcl
          tech,Associate General manager.Dr.M.Nithya gave the welcome address
          for this event. Mr.Karthiq Ganesan gave his speech on the latest
          technology in IT industry and clarified the students doubts on job
          placements.Also he had shared ideas on data science field along with
          their communication skills to get improved. There were totally 86
          attendees in this event, out of which 25 students were from various
          other reputed colleges.Students best performer awards were given to
          the students after filing nominations .Both technical like Cipher
          Nation , Startup Smackdown and non-technical events like
          Captura,Superhero Shippuden,Music Fiesta were conducted and the
          student winners were provided with certificates and cash prize.With
          vote of thank ,the event gathering ended at 4 pm.
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
