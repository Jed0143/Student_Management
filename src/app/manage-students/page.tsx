"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

interface Student {
  id: number;
  name: string;
  schedule: string;
  age: number | string;
  email: string;
  address: string;
}

const ManageStudents: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Joherlelr",
      schedule: "Monday 8:00AM - 10:00AM",
      age: 20,
      email: "joherlelr@example.com",
      address: "123 Main Street",
    },
    {
      id: 2,
      name: "Janfdfdwe",
      schedule: "Tuesday 10:00AM",
      age: 22,
      email: "janfdfdwe@example.com",
      address: "456 Elm Street",
    },
    {
      id: 3,
      name: "Alice",
      schedule: "Monday 8:00AM - 10:00AM",
      age: 19,
      email: "alice@example.com",
      address: "789 Oak Street",
    },
    {
      id: 4,
      name: "Bob",
      schedule: "Wednesday 2:00PM - 4:00PM",
      age: 21,
      email: "bob@example.com",
      address: "321 Maple Avenue",
    },
  ]);

  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    name: "",
    schedule: "",
    age: "",
    email: "",
    address: "",
  });

  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.schedule) {
      setStudents([
        ...students,
        { ...newStudent, id: Date.now(), age: Number(newStudent.age) },
      ]);
      setNewStudent({ id: 0, name: "", schedule: "", age: "", email: "", address: "" });
    }
  };

  const handleEditStudent = (index: number) => {
    setNewStudent(students[index]);
    setSelectedStudent(index);
  };

  const handleUpdateStudent = () => {
    if (selectedStudent !== null) {
      const updatedStudents = students.map((student, index) =>
        index === selectedStudent ? { ...student, ...newStudent, age: Number(newStudent.age) } : student
      );
      setStudents(updatedStudents);
      setNewStudent({ id: 0, name: "", schedule: "", age: "", email: "", address: "" });
      setSelectedStudent(null);
    }
  };

  const handleDeleteStudent = (index: number) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleViewDetails = (index: number) => {
    setSelectedStudent(index);
  };

  const groupedStudents = students.reduce<Record<string, Student[]>>((groups, student) => {
    const schedule = student.schedule.trim();
    if (!schedule) return groups;

    if (!groups[schedule]) {
      groups[schedule] = [];
    }
    groups[schedule].push(student);
    return groups;
  }, {});

  return (
    <div className="p-6">
      <Sidebar />

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Manage your Students</h1>
      </header>

      {Object.keys(groupedStudents).length > 0 ? (
        Object.keys(groupedStudents).map((schedule) => (
          <div key={schedule} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Schedule: {schedule}</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedStudents[schedule].map((student, index) => (
                    <tr key={student.id} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          className="text-green-500 mr-2"
                          onClick={() => handleViewDetails(index)}
                        >
                          View Details
                        </button>
                        <button
                          className="text-blue-500 mr-2"
                          onClick={() => handleEditStudent(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500"
                          onClick={() => handleDeleteStudent(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <p>No students available for the given schedules.</p>
      )}

      {/* Remaining code for details and adding/updating students remains the same */}
    </div>
  );
};

export default ManageStudents;
