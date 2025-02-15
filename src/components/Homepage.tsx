import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from next/image

const Homepage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-200">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl px-6 py-8 gap-8 lg:gap-16">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
                    <Image
                        src="/cd.svg"
                        alt="cd"
                        layout="responsive" // Makes the image responsive
                        width={500} // Define the natural width of the image
                        height={300} // Define the natural height of the image
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 p-6 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-blue mb-4">
                        Welcome to the M.P.C.D.C.A.R. Student Management System
                    </h1>
                    <p className="text-lg text-blue-900 mb-8 lg:mb-4 px-4">
                        Mahabang Parang Child Development Center.
                    </p>
                    <p className="text-lg text-blue-900 mb-8 lg:mb-8 px-4">
                        
                        SY. 2024-2025.
                    </p>
                    <div className="flex flex-col items-center gap-6 mb-16">
                        {/* Login Button */}
                        <Link href="/login">
                            <button className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
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
