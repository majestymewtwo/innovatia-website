"use client";
import { useEffect, useState } from "react";
import Confetti from "@/components/register/Confetti";
import { unHideHamButton } from "../utils/utils";

const Success = (props) => {
  const [visible, setVisible] = useState(true);
  const serializedUser = props.searchParams.user;
  const user = JSON.parse(serializedUser);

  useEffect(() => {
    unHideHamButton();
  }, []);

  return (
    <>
      <div className='flex justify-center w-full h-screen pt-6'>
        {user.name + " " + user.email}
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
