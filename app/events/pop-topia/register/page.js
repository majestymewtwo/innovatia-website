import RegisterComponent from "@/components/register/register";

const page = () => {
  const event = {
    name: "Pop Topia",
    description:
      '"REGISTRATIONS CLOSED!!',
    date: "2023-11-22",
    time: "11:15",
    maxMembers: 3,
    minMembers: 2,
    venue: "Online",
    image:
      "https://images.unsplash.com/photo-1593642532450-9d8a9a7e9c9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwdGhpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    link: "https://www.google.com",
    path: "/pop-topia",
  };

  return (
    <div className='flex items-center justify-center h-auto'>
      <RegisterComponent event={event} />
    </div>
  );
};

export default page;
