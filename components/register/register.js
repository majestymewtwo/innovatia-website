"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DisplayDescriptionOnHover } from "./DisplayDescriptionOnHover";
import Member from "./Member";
import Team from "./Team";
// Interface event {
//   name: string;
//   description: string;
//   date: string;
//   time: string;
//   maxMembers: number;
//   minMembers: number;
//   venue: string;
//   image: string;
//   link: string;
// }

// Interface member = {
//   name: string;
//   email: string;
//   phone: string;
//   college: string;
//   dept: string;
//   year: string;
//   gender: string;
// }

const Register = ({ event }) => {
  const { maxMembers, minMembers } = event;

  const [teamSize, setTeamSize] = useState(2);
  
  const [memberDetails, setMemberDetails] = useState({});

  useEffect(() => {
    setTeam(prevTeam => ({
      ...prevTeam,
      teamMembers: memberDetails,
    }));
  }, [memberDetails]);

  useEffect(() => {
    for(const member in memberDetails) {
      if(teamSize-1 < member)
        delete memberDetails[member];
    }
  }, [teamSize]);
    

  const handleMemberDetails = (id, details) => {
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      [id]: details,
    }));
  };


  const [team, setTeam] = useState({
    teamName: "",
    teamMembers: {},
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    captainCollege: "",
    captainDept: "",
    captainCollegeId: "",
    captainYear: "",
    captainGender: "",
  });

  const handleRegister = () => {
    console.log(memberDetails);
  }

  

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-scroll font-sans rounded">
      <DisplayDescriptionOnHover event={event} />
      <Team
        maxSize={maxMembers}
        minSize={minMembers}
        setTeamSize={setTeamSize}
        setTeam={setTeam}
      />
      <div className="flex flex-wrap justify-between w-full gap-0 space-y-4 xs:w-4/5 sm:w-full md:w-4/5 lg:w-2/3">
        {teamSize > 1 &&
          Array.from({ length: teamSize - 1 }, (_, i) => (
            <Member key={i + 1} id={i + 1} handleMemberDetails={handleMemberDetails} />
          ))}
      </div>
      <div className="flex w-full mt-4 justify-evenly">
        <Button className="text-black bg-white hover:text-black hover:bg-white">
          Go Back
        </Button>
        {/* <Button className="text-black bg-white hover:text-black hover:bg-white">
          Add Co Astronaut
        </Button> */}
        <Button onClick={handleRegister} className="text-black bg-white hover:text-black hover:bg-white" >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
