"use client";
import React, { useState } from "react";

const onlineRound = [
  {
    date: "18.11.2023 7.00PM - 9.00PM",
    name: "Design Derbies",
  },
  {
    date: "18.11.2023 7.00PM - 9.00PM",
    name: "Game of Threats",
  },
  {
    date: "18.11.2023 7.00PM - 9.00PM",
    name: "Superhero Shippuden",
  },
  {
    date: "18.11.2023 7.00PM - 9.00PM",
    name: "Poptopia",
  },
  {
    date: "20.11.2023",
    name: "(Shortlisted teams will be posted in the group)",
  },
  {
    date: "20.11.2023",
    name: "Ink and Insight",
  },
  {
    date: "20.11.2023",
    name: "Pixel perfect",
  },
];

const offlineEvents = [
  {
    time: "9.30AM - 11.00AM",
    name: "Inauguration",
    venue: "MBA - Auditorium",
  },
  {
    time: "11.00AM - 11.15AM",
    name: "Break",
    venue: "-",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Ink and Insight",
    venue: "IEDC Cell",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Design Derbies",
    venue: "Alpha Hall",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Game of Threats",
    venue: "KM Lab",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Pixelperfect",
    venue: "Classroom - E3",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Superhero Shippuden",
    venue: "Gamma Hall",
  },
  {
    time: "11.15AM - 12.35PM",
    name: "Poptopia",
    venue: "MBA - Auditorium",
  },
  {
    time: "12.35PM - 1.25PM",
    name: "Lunch Break",
    venue: "-",
  },
  {
    time: "1.25PM - 2.45PM",
    name: "Ink and Insight",
    venue: "IEDC Cell",
  },
  {
    time: "1.25PM - 2.45PM",
    name: "Design Derbies",
    venue: "Alpha Hall",
  },
  {
    time: "1.25PM - 2.45PM",
    name: "Game of Threats",
    venue: "KM Lab",
  },
  {
    time: "1.25PM - 2.45PM",
    name: "Superhero Shippuden",
    venue: "Gamma Hall",
  },
  {
    time: "1.25PM - 2.45PM",
    name: "Poptopia",
    venue: "MBA - Auditorium",
  },
  {
    time: "2.45PM - 3.00PM",
    name: "Break",
    venue: "-",
  },
  {
    time: "3.00PM - 4.00PM",
    name: "Valedictory",
    venue: "MBA - Auditorium",
  },
];

function Schedule() {
  const [showOnline, setShowOnline] = useState(true);
  const buttonClass =
    "text-white py-2 px-4 border backdrop-blur-md rounded-lg w-fit";

  const toggleSchedule = (type) => {
    setShowOnline(type === "online");
  };

  return (
    <div className="container mx-auto space-y-6 py-12">
      {/* Toggle Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button
          onClick={() => toggleSchedule("online")}
          className={`${showOnline && "bg-white/25"} ${buttonClass}`}
        >
          Show Online Schedule
        </button>
        <button
          onClick={() => toggleSchedule("offline")}
          className={`${!showOnline && "bg-white/25"} ${buttonClass}`}
        >
          Show Offline Schedule
        </button>
      </div>

      {/* Online Round - Schedule */}
      {showOnline && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Online Round</h2>
          <table className="min-w-full border border-gray-300 backdrop-blur-md bg-white/5 ">
            <thead className="bg-slate-400/20">
              <tr>
                <th className="px-4 py-2 border-b">Event Date and Time</th>
                <th className="px-4 py-2 border-b">Event Name</th>
              </tr>
            </thead>
            <tbody>
              {onlineRound.map((round, index) => (
                <tr key={round.name}>
                  <td className="px-4 py-2 border-b">{round.date}</td>
                  <td className="px-4 py-2 border-b">{round.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Offline Rounds - Schedule */}
      {!showOnline && (
        <div>
          <h2 className="my-8 text-2xl font-semibold">
            Offline Rounds - Schedule
          </h2>
          <table className="min-w-full border border-gray-300 backdrop-blur-md bg-white/5">
            <thead className="bg-slate-400/20">
              <tr>
                <th className="px-4 py-2 border-b">Event Time</th>
                <th className="px-4 py-2 border-b">Event Name</th>
                <th className="px-4 py-2 border-b">Venue</th>
              </tr>
            </thead>
            <tbody>
              {offlineEvents.map((event) => (
                <tr key={event.name}>
                  <td className="px-4 py-2 border-b">{event.time}</td>
                  <td className="px-4 py-2 border-b">{event.name}</td>
                  <td className="px-4 py-2 border-b">{event.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Schedule;
