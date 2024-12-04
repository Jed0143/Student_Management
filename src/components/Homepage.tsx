import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Importing the Image component from next/image

const Homepage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl px-6 py-8 gap-8 lg:gap-16">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
                    <Image
                        src="/students.svg"
                        alt="students"
                        layout="responsive"  // Makes the image responsive
                        width={500}          // Define the natural width of the image
                        height={300}         // Define the natural height of the image
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-blue-900 mb-4">
                        Welcome to the School Management System
                    </h1>
                    <p className="text-lg text-blue-700 mb-8 lg:mb-12 px-4">
                        Streamline school management, class organization, and add students and faculty.
                        Seamlessly track attendance, assess performance, and provide feedback.
                        Access records, view marks, and communicate effortlessly.
                    </p>
                    <div className="flex flex-col items-center gap-6 mb-16">
                        {/* Login Button */}
                        <Link href="/choose">
                            <button className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                                Login
                            </button>
                        </Link>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
