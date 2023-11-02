"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import DisplayDescriptionOnHover from "./DisplayDescriptionOnHover";
import { useToast } from "../ui/use-toast";
import {
  validateTeamName,
  validateTeamMembers,
  validateCaptainDetails,
} from "./validation";
import Member from "./Member";
import Team from "./Team";
import { XOctagon } from "lucide-react";

const Register = ({ event }) => {
  const { maxMembers, minMembers } = event;

  const [teamSize, setTeamSize] = useState(1);

  const [memberDetails, setMemberDetails] = useState({});

  const [team, setTeam] = useState({
    teamName: "",
    teamMembers: [],
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    captainCollege: "",
    captainDept: "",
    captainCollegeId: "",
    captainYear: "",
    captainGender: "",
  });

  const { toast } = useToast();

  const handleErrorToast = (title, message) => {
    toast({
      title: (
        <div className="flex items-center">
          {/* <XOctagon className="w-4 mr-2" /> */}
          <h2 className="ml-10 font-medium text-md">{title}</h2>
        </div>
      ),
      description: (
        <div className="flex items-center">
          <XOctagon className="w-6 mr-4 -mt-5 font-extrabold" />
          <h2 className="font-medium text-md">{message}</h2>
        </div>
      ),
      duration: 2000,
      className:
        "bg-[#D84646] backdrop-blur-md text-white border-red-600 rounded font-sans w-[15rem] md:w-[22rem] font-medium",
    });
  };
  //   setState(2)
  //   setState(()=>{})
  //   setState(value | ()=>{})
  //   {
  //      if(typeof value !== "function")
  //        state = value
  //      else
  //        state = value(state)
  //   }
  //  ...{name: vkj } name: vkj

  useEffect(() => {
    const newTeamMembers = [];
    for (const member in memberDetails)
      newTeamMembers.push(memberDetails[member]);

    setTeam((prevTeam) => ({
      ...prevTeam,
      teamMembers: newTeamMembers,
    }));
  }, [memberDetails]);

  useEffect(() => {
    for (const member in memberDetails) {
      if (teamSize - 1 < member) delete memberDetails[member];
    }
  }, [teamSize]);

  const handleMemberDetails = (id, details) => {
    setMemberDetails((prevDetails) => ({
      ...prevDetails,
      [id]: details,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    // validate team details

    // validate team name
    const isValidTeamName = validateTeamName(team.teamName, handleErrorToast);
    if (!isValidTeamName) return;

    // validate captain details
    const isValidCaptainDetails = validateCaptainDetails(
      team,
      handleErrorToast
    );
    if (!isValidCaptainDetails) return;

    // validate team members
    const isValidTeamMembers = validateTeamMembers(
      team.teamMembers,
      minMembers,
      handleErrorToast
    );
    console.log(isValidTeamMembers);
    if (!isValidTeamMembers) return;

    console.log(team);

    // register team
    // registerTeam(team);
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full min-h-screen p-2 overflow-x-hidden overflow-y-scroll font-sans rounded sm:p-4"
      onSubmit={handleRegister}
    >
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
            <Member
              key={i + 1}
              id={i + 1}
              handleMemberDetails={handleMemberDetails}
            />
          ))}
      </div>
      <div className="flex w-full mt-4 justify-evenly">
        <Button
          type="button"
          className="text-black bg-white hover:text-black hover:bg-white"
        >
          Go Back
        </Button>
        <Button
          type="submit"
          className="text-black bg-white hover:text-black hover:bg-white"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

Register.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Register;
