// pages/admin.js
import React from 'react';

const AdminLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <div className="flex flex-col items-center w-full max-w-lg px-8 py-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
          Admin Login
        </h1>

        {/* Login Form */}
        <form className="w-full space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button> */}
        </form>
        <a
            href="/dashboard"
            className="w-full py-3 px-6 mt-10 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105 block text-center"
            >
            Login
        </a>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
