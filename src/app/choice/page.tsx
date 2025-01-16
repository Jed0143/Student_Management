// pages/choice.js
import React from 'react';
import Link from 'next/link';

const ChoicePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-extrabold text-black mb-10 text-center px-4">
      Welcome to the M.P.C.D.A.R. Student Management System
      </h1>

      <div className="flex flex-col items-center w-full max-w-lg px-8 py-12 bg-white rounded-lg shadow-lg">
        {/* Subtitle */}
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Select Your Role
        </h1>

        <div className="flex flex-col gap-6 w-full">
          {/* Admin Option */}
          <Link href="/admin_login">
            <button className="w-full py-3 px-6 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
              Admin Login
            </button>
          </Link>

          {/* Student Option */}
          <Link href="/student_login">
            <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Student Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
