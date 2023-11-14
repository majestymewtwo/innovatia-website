"use client";
import { useEffect, useState } from "react";
import Confetti from "@/components/register/Confetti";
import { unHideHamButton } from "../utils/utils";
import { Card } from "@/components/ui/card";
import GoBack from "@/components/GoBack";

const Success = ({ searchParams }) => {
  const [visible, setVisible] = useState(true);
  const data = JSON.parse(searchParams.data);

  const titleClass =
    "flex flex-col md:flex-row items-center space-x-4 md:text-xl text-center";
  const headingClass = "font-bold";
  const detailClass = "font-light";

  const renderMemberDetails = (label, value) => {
    if (value !== null && value !== undefined) {
      return (
        <div className={titleClass}>
          <h1 className={headingClass}>{label}</h1>
          <h1 className={detailClass}>{value}</h1>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
      <div className='flex flex-col space-y-6 items-center justify-center w-full min-h-screen pt-20 md:pt-5'>
        <h2 className='inline-block md:p-3 md:pt-0 text-3xl md:text-5xl text-transparent font-bold animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text tracking-tight'>
          Registration Successful
        </h2>

        <Card className='grid col-span-1 md:grid-cols-2 gap-3 bg-white/5 text-white w-[80%] p-3'>
          {renderMemberDetails("Team Name", data.teamName)}

          {/* Member 1 */}
          {renderMemberDetails("Member 1 Name", data.memberOneName)}
          {renderMemberDetails("Member 1 College ID", data.memberOneCollegeId)}
          {renderMemberDetails("Member 1 Mail ID", data.memberOneMailId)}
          {renderMemberDetails("Member 1 Phone", data.memberOnePhoneNo)}
          {renderMemberDetails("Member 1 Department", data.memberOneDept)}
          {renderMemberDetails("Member 1 Year", data.memberOneYear)}
          {renderMemberDetails(
            "Member 1 College Name",
            data.memberOneCollegeName
          )}

          {/* Member 2 */}
          {renderMemberDetails("Member 2 Name", data.memberTwoName)}
          {renderMemberDetails("Member 2 College ID", data.memberTwoCollegeId)}
          {renderMemberDetails("Member 2 Mail ID", data.memberTwoMailId)}
          {renderMemberDetails("Member 2 Phone", data.memberTwoPhoneNo)}
          {renderMemberDetails("Member 2 Department", data.memberTwoDept)}
          {renderMemberDetails("Member 2 Year", data.memberTwoYear)}
          {renderMemberDetails(
            "Member 2 College Name",
            data.memberTwoCollegeName
          )}

          {/* Member 3 */}
          {renderMemberDetails("Member 3 Name", data.memberThreeName)}
          {renderMemberDetails(
            "Member 3 College ID",
            data.memberThreeCollegeId
          )}
          {renderMemberDetails("Member 3 Mail ID", data.memberThreeMailId)}
          {renderMemberDetails("Member 3 Phone", data.memberThreePhoneNo)}
          {renderMemberDetails("Member 3 Department", data.memberThreeDept)}
          {renderMemberDetails("Member 3 Year", data.memberThreeYear)}
          {renderMemberDetails(
            "Member 3 College Name",
            data.memberThreeCollegeName
          )}
        </Card>
        <GoBack path='/events' />
      </div>

      {visible && <Confetti />}
    </>
  );
};

Success.getInitialProps = async ({ query }) => {
  const { name } = query;
  return { name };
};

export default Success;
