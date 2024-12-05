import React, { useState } from 'react';

// Example data (you can later fetch this data from an API)
const students = [
  { id: 1, name: 'John Doe', class: '10A', photo: '/images/john.jpg', contact: '123-456-7890', performance: 'A' },
  { id: 2, name: 'Jane Smith', class: '10B', photo: '/images/jane.jpg', contact: '987-654-3210', performance: 'B+' },
  // Add more students as needed
];

const ManageStudents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  // Handle search/filtering by name, ID, or class
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFilteredStudents(
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          student.id.toString().includes(e.target.value) ||
          student.class.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Students</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, ID, or class..."
        className="p-2 border rounded mb-4 w-full"
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Student List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white shadow-md rounded p-4">
            <img
              src={student.photo}
              alt={student.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{student.name}</h2>
            <p className="text-gray-600 text-center">Class: {student.class}</p>
            <p className="text-gray-600 text-center">Contact: {student.contact}</p>
            <p className="text-gray-600 text-center">Performance: {student.performance}</p>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white p-2 rounded">View Details</button>
              <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageStudents;
