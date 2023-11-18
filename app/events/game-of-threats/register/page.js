import RegisterComponent from "@/components/register/register";
import RegistrationClosed from "@/components/register-closed";


const page = () => {
  const event = {
    name: "Game of Threats",
    description:
      '"Decoding Threats, Coding Solutions" Fostering a methodical approach to problem-solving through coding, stimulating creative thinking, and reinforcing logical strategies to efficiently tackle challenges.',
    date: "2023-11-22",
    time: "11:15",
    maxMembers: 2,
    minMembers: 2,
    venue: "Offline",
    image:
      "https://images.unsplash.com/photo-1593642532450-9d8a9a7e9c9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwdGhpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    link: "https://www.google.com",
    path: "/game-of-threats",
  };

  return (
    <div className='flex items-center justify-center h-auto'>
      {/* <RegisterComponent event={event} /> */}
      <RegistrationClosed />
    </div>
  );
};

export default page;
