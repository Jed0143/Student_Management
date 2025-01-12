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
        <h3 className="text-8xl font-bold">Manage your Students</h3>
      </header>

      {Object.keys(groupedStudents).length > 0 ? (
        Object.keys(groupedStudents).map((schedule) => (
          <div key={schedule} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Schedule: {schedule}</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-200">
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

      {selectedStudent !== null && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold">Personal Details</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Name:</td>
                <td className="border border-gray-300 px-4 py-2">
                  {students[selectedStudent].name}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Age:</td>
                <td className="border border-gray-300 px-4 py-2">
                  {students[selectedStudent].age}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Email:</td>
                <td className="border border-gray-300 px-4 py-2">
                  {students[selectedStudent].email}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Address:</td>
                <td className="border border-gray-300 px-4 py-2">
                  {students[selectedStudent].address}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl mb-4">
          {selectedStudent !== null ? "Edit Student" : "Add Student"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStudent.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="text"
            name="schedule"
            placeholder="Schedule"
            value={newStudent.schedule}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newStudent.age}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newStudent.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mt-4">
          {selectedStudent !== null ? (
            <button
              onClick={handleUpdateStudent}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAddStudent}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Add
            </button>
          )}
          <button
            onClick={() => {
              setNewStudent({ id: 0, name: "", schedule: "", age: "", email: "", address: "" });
              setSelectedStudent(null);
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
