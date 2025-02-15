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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

// Edit Student Function
const handleEditStudent = (student: Student) => {
  setEditingStudent(student);
  setIsModalOpen(true);
};

// Save Edited Student Function
const handleSaveEditedStudent = () => {
  setStudents((prevStudents) =>
    prevStudents.map((s) => (s.id === editingStudent?.id ? editingStudent : s))
  );
  setEditingStudent(null);
  setIsModalOpen(false);
};

// Delete Student Function
const handleDeleteStudent = (id: number) => {
  setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
};

// Update input fields in the modal
const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  if (editingStudent) {
    setEditingStudent({ ...editingStudent, [name]: value });
  }
};


  const handleAddStudent = () => {
    if (newStudent.name && newStudent.schedule) {
      setStudents([
        ...students,
        { ...newStudent, id: Date.now(), age: Number(newStudent.age) },
      ]);
      setNewStudent({ id: 0, name: "", schedule: "", age: "", email: "", address: "" });
      setIsModalOpen(false);
    }
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
    <div className="flex">
      <Sidebar />

      <div className="p-6 flex-1">
        <header className="text-center mt-10 mb-6">
          <h1 className="text-4xl font-bold">Manage Your Students</h1>
        </header>

        {/* Student List Table */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Student List</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="text-green-500 mr-2">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Student Button */}
        <div className="mt-8 mb-8 flex justify-start">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Add Student
          </button>
        </div>

        {/* Add Student Modal */}
        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">
        {editingStudent ? "Edit Student" : "Add Student"}
      </h2>

      {/* Student Name Dropdown */}
      <select
        name="name"
        value={editingStudent ? editingStudent.name : newStudent.name}
        onChange={editingStudent ? handleEditInputChange : handleInputChange}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">Select Student Name</option>
        {students.map((student) => (
          <option key={student.id} value={student.name}>
            {student.name}
          </option>
        ))}
      </select>

      {/* Schedule Dropdown */}
      <select
        name="schedule"
        value={editingStudent ? editingStudent.schedule : newStudent.schedule}
        onChange={editingStudent ? handleEditInputChange : handleInputChange}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select Schedule</option>
        {Array.from(new Set(students.map((student) => student.schedule))).map(
          (schedule) => (
            <option key={schedule} value={schedule}>
              {schedule}
            </option>
          )
        )}
      </select>

      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => {
            setIsModalOpen(false);
            setEditingStudent(null);
          }}
          >
            Cancel
                </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={editingStudent ? handleSaveEditedStudent : handleAddStudent}
                  >
                  {editingStudent ? "Save Changes" : "Add Student"}
                </button>
              </div>
            </div>
          </div>
        )}


        {/* Grouped Students by Schedule */}
        {Object.keys(groupedStudents).length > 0 ? (
          Object.keys(groupedStudents).map((schedule) => (
            <div key={schedule} className="mb-8">
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
                    {groupedStudents[schedule].map((student) => (
                      <tr key={student.id} className="text-center">
                        <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button className="text-blue-500 mr-2" onClick={() => handleEditStudent(student)}>Edit</button>
                             <button className="text-red-500" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                            </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-gray-600">No students available for the given schedules.</p>
        )}
      </div>
    </div>
  );
};

export default ManageStudents;
