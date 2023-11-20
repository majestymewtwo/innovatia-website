import RegistrationClosed from "@/components/register-closed";
import RegisterComponent from "@/components/register/register";

const page = () => {
  const event = {
    name: "Pixel Perfect",
    description:
      "“Where art meets reality!” It is an illusion that photos are made with the camera… They are made with the eye, heart, TV, and head.",
    date: "2023-11-22",
    time: "11:15",
    maxMembers: 1,
    minMembers: 1,
    venue: "Offline",
    image:
      "https://images.unsplash.com/photo-1593642532450-9d8a9a7e9c9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwdGhpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    link: "https://www.google.com",
    path: "/pixel-perfect",
  };

  return (
    <div className='flex items-center justify-center h-auto'>
      {/* <RegisterComponent event={event} /> */}
      <RegistrationClosed />
    </div>
  );
};

export default page;
