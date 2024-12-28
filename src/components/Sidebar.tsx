"use client"; // Add this line at the top

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`p-2 m-4 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none fixed top-4 ${
          isSidebarVisible ? 'left-64' : 'left-4'
        } z-50`}
      >
        {isSidebarVisible ? ' < ' : ' > '}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="w-64 bg-green-500 text-white min-h-screen p-6 fixed top-0 left-0 flex flex-col justify-between">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Admin Panel</h2>

            {/* Navigation Links */}
            <ul className="space-y-4">
              <li>
                <Link href="/dashboard" className="text-lg text-white hover:text-green-900">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/manage-students" className="text-lg text-white hover:text-green-900">
                  Manage Students
                </Link>
              </li>
              <li>
                <Link href="/attendance" className="text-lg text-white hover:text-green-900">
                  Attendance
                </Link>
              </li>
              <li>
                <Link href="/grades" className="text-lg text-white hover:text-green-900">
                  Grades
                </Link>
              </li>
              <li>
                <Link href="/communication" className="text-lg text-white hover:text-green-900">
                  Communication
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-lg text-white hover:text-green-900">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-lg text-white hover:text-green-900">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Log Out Button */}
          <div className="mt-12">
            <button
              onClick={() => alert('Logging out...')}
              className="w-full p-2 bg-green-700 text-white rounded hover:bg-green-900 focus:outline-none"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
