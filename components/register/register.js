"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { DisplayDescriptionOnHover } from "./DisplayDescriptionOnHover";
import Member from "./Member";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
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

const register = ({ event }) => {
  const { maxMembers, minMembers } = event;

  const [members, setMembers] = useState([]);

  const [teamSize, setTeamSize] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-scroll font-sans rounded">
      <DisplayDescriptionOnHover event={event} />
      <Team maxSize={maxMembers} minSize={minMembers}/>
      {
        teamSize > 1 &&
          Array.from({ length: teamSize }, (_, i) => <Member key={i} id={i} />)
      }
      <div className="flex w-full justify-evenly">
        <Button className="text-black bg-white hover:text-black hover:bg-white">
          Go Back
        </Button>
        {/* <Button className="text-black bg-white hover:text-black hover:bg-white">
          Add Co Astronaut
        </Button> */}
        <Button className="text-black bg-white hover:text-black hover:bg-white">
          Register
        </Button>
      </div>
    </div>
  );
};

export default register;
