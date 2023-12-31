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
import { useRouter } from "next/navigation";
import { unHideHamButton } from "@/app/utils/utils";
import { sendRequest } from "@/request";
import LoadingFallback from "../loading-fallback";

const RegisterComponent = ({ event }) => {
  const router = useRouter();

  const { maxMembers, minMembers, path } = event;

  const [teamSize, setTeamSize] = useState(1);
  const [loading, setLoading] = useState(false);

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
        <div className='flex items-center'>
          {/* <XOctagon className="w-4 mr-2" /> */}
          <h2 className='ml-10 font-medium text-md'>{title}</h2>
        </div>
      ),
      description: (
        <div className='flex items-center'>
          <XOctagon className='w-6 mr-4 -mt-5 font-extrabold' />
          <h2 className='font-medium text-md'>{message}</h2>
        </div>
      ),
      duration: 2000,
      className:
        "bg-[#D84646] backdrop-blur-md text-white border-red-600 rounded font-sans w-[15rem] md:w-[22rem] font-medium",
    });
  };

  useEffect(() => {
    const newTeamMembers = [];
    for (const member in memberDetails)
      newTeamMembers.push(memberDetails[member]);

    setTeam((prevTeam) => ({
      ...prevTeam,
      teamMembers: newTeamMembers,
    }));
    unHideHamButton();
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

  const handleRegister = async (event) => {
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

    if (isValidTeamMembers) {
      setLoading(true);
      const data = await sendRequest(team, path);
      const query = new URLSearchParams({
        data: JSON.stringify(data),
      });
      setLoading(false);
      router.push("/success?" + query);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingFallback />
      ) : (
        <form
          className='flex flex-col items-center justify-center w-full h-auto min-h-screen p-2 overflow-x-hidden overflow-y-scroll font-sans rounded sm:p-4 register'
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onSubmit={handleRegister}>
          <DisplayDescriptionOnHover event={event} />
          <Team
            maxSize={maxMembers}
            minSize={minMembers}
            setTeamSize={setTeamSize}
            setTeam={setTeam}
          />
          <div className='flex flex-wrap justify-between w-full gap-0 space-y-4 xs:w-4/5 sm:w-full md:w-4/5 lg:w-2/3'>
            {teamSize > 1 &&
              Array.from({ length: teamSize - 1 }, (_, i) => (
                <Member
                  key={i + 1}
                  id={i + 1}
                  handleMemberDetails={handleMemberDetails}
                />
              ))}
          </div>
          <div className='flex w-full mt-4 justify-evenly'>
            <Button
              type='button'
              className='text-gray-300 font-light tracking-wider bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white hover:border hover:border-white transition-all ease-in-out'
              onClick={() => router.back()}>
              Go Back
            </Button>
            <Button
              type='submit'
              className='text-gray-300 font-light tracking-wider bg-gradient-to-r from-red-500 to-yellow-500 hover:text-white hover:border hover:border-white transition-all ease-in-out'>
              Register
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

RegisterComponent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default RegisterComponent;
