"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

interface Student {
  id: number;
  name: string;
  present: boolean;
  note: string;
  schedule: string;
}

const AttendanceManager = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Joherlelr", present: false, note: "", schedule: "Morning" },
    { id: 2, name: "Janfdfdwe", present: false, note: "", schedule: "Afternoon" },
    { id: 3, name: "Alice", present: false, note: "", schedule: "Morning" },
    { id: 4, name: "Bob", present: false, note: "", schedule: "Evening" },
  ]);

  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const toggleAttendance = (studentId: number) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleNoteChange = (studentId: number, note: string) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, note } : student))
    );
  };

  const handleViewStudent = (student: Student) => {
    console.log("Viewing student:", student);
  };

  const handleSaveAttendance = () => {
    console.log("Attendance saved:", students);
  };

  const filteredStudents = selectedSchedule
    ? students.filter((student) => student.schedule === selectedSchedule)
    : students;

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 flex-1">
        <header className="text-center mt-8 mb-8">
          <h1 className="text-4xl font-bold">Attendance of Students</h1>
        </header>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-64 p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold">Select Schedule:</label>
          <select
            className="w-64 p-2 border rounded"
            value={selectedSchedule}
            onChange={(e) => setSelectedSchedule(e.target.value)}
          >
            <option value="">Select Schedules</option>
            {Array.from(new Set(students.map((s) => s.schedule))).map((schedule) => (
              <option key={schedule} value={schedule}>
                {schedule}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">List of Students</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Schedule</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.schedule}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleViewStudent(student)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Mark Attendance</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Present</th>
                  <th className="border px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={student.present}
                        onChange={() => toggleAttendance(student.id)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        placeholder="Add note"
                        value={student.note}
                        onChange={(e) => handleNoteChange(student.id, e.target.value)}
                        className="border rounded p-2"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleSaveAttendance}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceManager;