import React from 'react';
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900">Admin Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Overview of important information and quick access to key functionalities</p>
        </header>

        {/* Quick Stats Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium text-gray-600">Number of Students in Each Class:</h3>
              <p className="text-xl font-bold text-blue-600">120 Students</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-600">Attendance Percentage:</h3>
              <p className="text-xl font-bold text-green-600">92%</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-600">Pending Tasks:</h3>
              <p className="text-xl font-bold text-red-600">5 Pending Tasks</p>
            </li>
          </ul>
        </div>

        {/* Announcements Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Announcements</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-600">School-wide Announcement:</h3>
              <p className="text-lg text-gray-800">School will be closed next Friday due to a public holiday.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Class-Specific Update:</h3>
              <p className="text-lg text-gray-800">Class 10A&apos;s project submission deadline is extended by 2 days.</p>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium text-gray-600">Attendance Log:</h3>
              <p className="text-lg text-gray-800">Class 10A - 15 students marked absent in last session.</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-600">Grade Update:</h3>
              <p className="text-lg text-gray-800">Class 9B - Recent Math test grades uploaded.</p>
            </li>
            <li>
              <h3 className="font-medium text-gray-600">Upcoming Events:</h3>
              <p className="text-lg text-gray-800">Sports Day - March 25th, 2024.</p>
            </li>
          </ul>
        </div>

        {/* Class Schedule Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Class Schedule</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-gray-600">Day</th>
                <th className="py-2 px-4 border-b text-left text-gray-600">Subject</th>
                <th className="py-2 px-4 border-b text-left text-gray-600">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Monday</td>
                <td className="py-2 px-4 border-b">Mathematics</td>
                <td className="py-2 px-4 border-b">9:00 AM - 10:30 AM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Tuesday</td>
                <td className="py-2 px-4 border-b">Science</td>
                <td className="py-2 px-4 border-b">10:45 AM - 12:15 PM</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Wednesday</td>
                <td className="py-2 px-4 border-b">English</td>
                <td className="py-2 px-4 border-b">1:00 PM - 2:30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


