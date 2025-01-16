"use client"; // Add this at the top if using Next.js

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar"; // Optional, include if you use a Sidebar

// Define a Student interface for better type safety
interface Student {
  id: number;
  name: string;
  present: boolean;
  note: string;
}

const AttendanceManager = () => {
  // Mock student data
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Joherlelr", present: false, note: "" },
    { id: 2, name: "Janfdfdwe", present: false, note: "" },
    { id: 3, name: "Alice", present: false, note: "" },
    { id: 4, name: "Bob", present: false, note: "" },
  ]);

  const [showReport, setShowReport] = useState(false);

  // Handle marking attendance for a specific student
  const toggleAttendance = (studentId: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  // Handle adding notes for absences
  const handleNoteChange = (studentId: number, note: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, note } : student
      )
    );
  };

  return (
    <div className="p-6">
      <Sidebar /> {/* Include this if necessary */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Attendance Management</h1>
      </header>

      {/* Attendance Marking Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Mark Attendance</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Present</th>
                <th className="border border-gray-300 px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {student.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={student.present}
                      onChange={() => toggleAttendance(student.id)}
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      placeholder="Add note"
                      value={student.note}
                      onChange={(e) => handleNoteChange(student.id, e.target.value)}
                      className="border border-gray-300 rounded-lg p-2"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Reports Section */}
      <div className="mt-6">
        <button
          onClick={() => setShowReport((prev) => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {showReport ? "Hide Report" : "View Attendance Report"}
        </button>

        {showReport && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Attendance Report</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Attendance</th>
                  <th className="border border-gray-300 px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.present ? "Present" : "Absent"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.note || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceManager;
