// pages/manage-students.js
import React from "react";
import Sidebar from "@/components/Sidebar";

const ManageStudents = () => {
  return (
    <div className="p-6">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-8xl font-bold">Grades</h1>
        <p className="text-4xl">Welcome to the Grading System page!</p>
      </header>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample rows */}
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">Joherlelr</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">Janfdfdwe</td>
              <td className="border border-gray-300 px-4 py-2">B</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">Alice</td>
              <td className="border border-gray-300 px-4 py-2">A+</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-300 px-4 py-2">Bob</td>
              <td className="border border-gray-300 px-4 py-2">C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
