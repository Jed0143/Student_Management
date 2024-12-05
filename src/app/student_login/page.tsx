import React from "react";
import { useRouter } from "next/router";

const StudentLogin = () => {
  const router = useRouter();

  // Corrected handleLogin function
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add authentication logic here
    router.push("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center w-full max-w-md px-8 py-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
          Student Login
        </h1>

        {/* Login Form */}
        <form className="w-full space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
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
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
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
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;