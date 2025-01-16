// components/studentsidebar.js
import React from 'react';
import Link from 'next/link';

const StudentSidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Student Panel</h2>

      {/* Navigation Links */}
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="text-lg text-white hover:text-blue-300">
            Home/Dashboard
          </Link>
        </li>
        <li>
          <Link href="/attendance" className="text-lg text-white hover:text-blue-300">
            Attendance
          </Link>
        </li>
        <li>
          <Link href="/grades" className="text-lg text-white hover:text-blue-300">
            Grades
          </Link>
        </li>
        <li>
          <Link href="/announcements" className="text-lg text-white hover:text-blue-300">
            School Announcements
          </Link>
        </li>
        <li>
          <Link href="/communication" className="text-lg text-white hover:text-blue-300">
            Communication
          </Link>
        </li>
        <li>
          <Link href="/settings" className="text-lg text-white hover:text-blue-300">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentSidebar;
