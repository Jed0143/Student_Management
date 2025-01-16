// pages/manage-students.js
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Joherlelr", grade: "A" },
    { id: 2, name: "Janfdfdwe", grade: "B" },
    { id: 3, name: "Alice", grade: "A+" },
    { id: 4, name: "Bob", grade: "C" },
  ]);

  const [filters, setFilters] = useState({
    year: "2024",
    section: "A",
    quarter: "First Quarter",
  });

  const [editStudents, setEditStudents] = useState([...students]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleRefresh = () => {
    setFilters({
      year: "2024",
      section: "A",
      quarter: "First Quarter",
    });
    setEditStudents([...students]); // Reset to original students data
  };

  const handleEditChange = (id, field, value) => {
    setEditStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const handleSaveChanges = () => {
    setStudents([...editStudents]);
    alert("Changes saved successfully!");
  };

  return (
    <div className="p-6">
      <Sidebar />

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-8xl font-bold">Grades</h1>
        <p className="text-4xl">Welcome to the Grading System page!</p>
      </header>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <select
            name="section"
            value={filters.section}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

          <select
            name="quarter"
            value={filters.quarter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="First Quarter">First Quarter</option>
            <option value="Second Quarter">Second Quarter</option>
            <option value="Third Quarter">Third Quarter</option>
          </select>
        </div>

        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Refresh
        </button>
      </div>

      {/* Display Table */}
      <div className="overflow-x-auto mb-12">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editable Table */}
      <h2 className="text-2xl font-bold mb-4">Edit Student Information</h2>
      <div className="overflow-x-auto mb-6">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {editStudents.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleEditChange(student.id, "name", e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={student.grade}
                    onChange={(e) => handleEditChange(student.id, "grade", e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ManageStudents;
