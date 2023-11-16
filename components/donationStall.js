import { CalendarDays, Hourglass, School } from "lucide-react";
const donationStall = () => {
  return (
    <div className="p-6 m-2 space-y-4 text-justify rounded md:w-2/3 md:mr-10 bg-white/5 backdrop-blur-md font-poppins">
      <h1 className="font-sans text-4xl font-extrabold text-center text-transparent animate-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">
        AIDING HEARTS <span className="hidden md:inline">-</span> DONATION STALL
      </h1>
      <p className="text-lg tracking-wide text-center font-oswald">
        <q>Empowering Lives, One Contribution at a Time.</q>
      </p>
      <p className="">
        In the boundless spirit of compassion and community, we extend a
        Heartfelt Invitation to you to grace us with your presence at the{" "}
        <q className="font-semibold">AIDING HEARTS - DONATION STALL</q> where
        every act of generosity, no matter how modest, possesses the
        transformative power to create profound and enduring change. Your
        support, whether through financial contributions or essential items like
        clothing and books, will weave a tapestry of hope for those in need.
      </p>
      <p>
        Here, we stand united in pursuit of the Sustainable Development Goals
        (SDGs), embracing the names that represent our collective aspirations
      </p>
      <div className="grid grid-cols-2 mx-2 gap-y-6 sm:gap-y-10 sm:grid-cols-4 justify-items-center">
        <img className="rounded" width={125} height={125} src="/sdg1.png" />
        <img className="rounded" width={125} height={125} src="/sdg2.png" />
        <img className="rounded" width={125} height={125} src="/sdg3.png" />
        <img className="rounded" width={125} height={125} src="/sdg4.jpg" />
      </div>
      <p>
        Your presence and contributions will not merely touch lives; they will
        sculpt destinies and breathe life into dreams. This is more than an
        event; it is a convergence of hearts, a symphony of humanity in action.
        By joining hands with us, you become an architect of change, fostering a
        sense of communal responsibility that resonates far beyond the confines
        of the day. We are driven by a shared purpose—to extend a lifeline to
        those who truly need it.
      </p>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-between space-y-1 md:w-1/2">
          <div className="flex items-center pt-2">
            <School className="w-6 h-6 mr-2 opacity-70" />{" "}
            <span className="text-md text-muted-foreground">
              Sri Sairam Engineering College
            </span>
          </div>
          <div className="flex items-center pt-2">
            <CalendarDays className="w-6 h-6 mr-2 opacity-70" />{" "}
            <span className="text-md text-muted-foreground">
              November 22 , 2023
            </span>
          </div>
          <div className="flex items-center pt-2">
            <Hourglass className="w-6 h-6 mr-2 opacity-70 animate-pulse" />{" "}
            <span className="text-md text-muted-foreground">9:15 AM</span>
          </div>
        </div>
        <div className="self-center m-4 mb-6 md:w-1/2">
          <p className="text-xl tracking-wide text-center md:w-2/3 font-oswald">
            🙶 Together, let's make a difference that reverberates beyond
            measure. 🙷
          </p>
        </div>
      </div>
    </div>
  );
};

export default donationStall;
