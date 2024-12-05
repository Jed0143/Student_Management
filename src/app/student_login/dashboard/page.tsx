import React from "react";

const data = {
  children: [
    {
      name: "John Doe",
      grades: 85,
      attendance: 92,
      notifications: ["Absent 3 times this month", "Low grades in Math"],
    },
    {
      name: "Jane Doe",
      grades: 90,
      attendance: 95,
      notifications: ["Excellent performance in English"],
    },
  ],
  events: [
    { title: "Parent-Teacher Meeting", date: "2024-12-15" },
    { title: "Winter Holidays", date: "2024-12-20" },
  ],
};

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-8">Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Children Overview</h2>
        <div className="space-y-4">
          {data.children.map((child, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{child.name}</h3>
              <p>Grades: {child.grades}%</p>
              <p>Attendance: {child.attendance}%</p>
              <h4 className="font-semibold mt-2">Notifications:</h4>
              <ul className="list-disc list-inside">
                {child.notifications.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-2">
          {data.events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p>
                <strong>{event.title}</strong> - {event.date}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
