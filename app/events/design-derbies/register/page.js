import RegisterComponent from "@/components/register/register";

const page = () => {
  const event = {
    name: "Design Derbies",
    description:
      "Design Thinking is a process for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.",
    date: "2021-10-10",
    time: "12:00",
    maxMembers: 2,
    minMembers: 2,
    venue: "Online",
    image:
      "https://images.unsplash.com/photo-1593642532450-9d8a9a7e9c9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwdGhpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    link: "https://www.google.com",
    path: "/design-derbies",
  };

  return (
    <div className='flex items-center justify-center h-full'>
      <RegisterComponent event={event} />
    </div>
  );
};

export default page;
