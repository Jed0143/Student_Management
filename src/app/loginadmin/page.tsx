const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
        {/* Login Form */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Admin Login</h2>
        
        <form>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600">
          <p>Don&apos;t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
