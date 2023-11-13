"use client";
import React, { useState } from "react";

function Schedule() {
  const [showOnline, setShowOnline] = useState(true);

  const toggleSchedule = (type) => {
    setShowOnline(type === "online");
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Toggle Button */}
      <div className="mb-4">
        <button
          onClick={() => toggleSchedule("online")}
          className={`bg-${
            showOnline ? "blue" : "gray"
          }-500 text-white py-2 px-4 mr-2 border`}
        >
          Show Online Schedule
        </button>
        <button
          onClick={() => toggleSchedule("offline")}
          className={`bg-${
            showOnline ? "gray" : "green"
          }-500 text-white py-2 px-4 border`}
        >
          Show Offline Schedule
        </button>
      </div>

      {/* Online Round - Schedule */}
      {showOnline && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Online Round
          </h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event Date and Time</th>
                <th className="py-2 px-4 border-b">Event Name</th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td class="py-2 px-4 border-b">18.11.2023 7.00PM - 9.00PM</td>
        <td class="py-2 px-4 border-b">Design Derbies</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">18.11.2023 7.00PM - 9.00PM</td>
        <td class="py-2 px-4 border-b">Game of Threats</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">18.11.2023 7.00PM - 9.00PM</td>
        <td class="py-2 px-4 border-b">Superhero Shippuden</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">18.11.2023 7.00PM - 9.00PM</td>
        <td class="py-2 px-4 border-b">Poptopia</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">20.11.2023</td>
        <td class="py-2 px-4 border-b">(Shortlisted teams will be posted in the group)</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">20.11.2023</td>
        <td class="py-2 px-4 border-b">Ink and Insight</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">20.11.2023</td>
        <td class="py-2 px-4 border-b">Pixelperfect</td>
        <td class="py-2 px-4 border-b">-</td>
      </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Offline Rounds - Schedule */}
      {!showOnline && (
        <div>
          <h2 className="text-2xl font-semibold my-8">
            Offline Rounds - Schedule
          </h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event Time</th>
                <th className="py-2 px-4 border-b">Event Name</th>
                <th className="py-2 px-4 border-b">Venue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b">9.30AM - 11.00AM</td>
                <td class="py-2 px-4 border-b">Inauguration</td>
                <td class="py-2 px-4 border-b">MBA - Auditorium</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.00AM - 11.15AM</td>
                <td class="py-2 px-4 border-b">Break</td>
                <td class="py-2 px-4 border-b">-</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Ink and Insight</td>
                <td class="py-2 px-4 border-b">IEDC Cell</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Design Derbies</td>
                <td class="py-2 px-4 border-b">Alpha Hall</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Game of Threats</td>
                <td class="py-2 px-4 border-b">KM Lab</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Pixelperfect</td>
                <td class="py-2 px-4 border-b">Classroom - E3</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Superhero Shippuden</td>
                <td class="py-2 px-4 border-b">Gamma Hall</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">11.15AM - 12.35PM</td>
                <td class="py-2 px-4 border-b">Poptopia</td>
                <td class="py-2 px-4 border-b">MBA - Auditorium</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">12.35PM - 1.25PM</td>
                <td class="py-2 px-4 border-b">Lunch Break</td>
                <td class="py-2 px-4 border-b">-</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">1.25PM - 2.45PM</td>
                <td class="py-2 px-4 border-b">Ink and Insight</td>
                <td class="py-2 px-4 border-b">IEDC Cell</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">1.25PM - 2.45PM</td>
                <td class="py-2 px-4 border-b">Design Derbies</td>
                <td class="py-2 px-4 border-b">Alpha Hall</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">1.25PM - 2.45PM</td>
                <td class="py-2 px-4 border-b">Game of Threats</td>
                <td class="py-2 px-4 border-b">KM Lab</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">1.25PM - 2.45PM</td>
                <td class="py-2 px-4 border-b">Superhero Shippuden</td>
                <td class="py-2 px-4 border-b">Gamma Hall</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">1.25PM - 2.45PM</td>
                <td class="py-2 px-4 border-b">Poptopia</td>
                <td class="py-2 px-4 border-b">MBA - Auditorium</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">2.45PM - 3.00PM</td>
                <td class="py-2 px-4 border-b">Break</td>
                <td class="py-2 px-4 border-b">-</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">3.00PM - 4.00PM</td>
                <td class="py-2 px-4 border-b">Valedictory</td>
                <td class="py-2 px-4 border-b">MBA - Auditorium</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Schedule;
