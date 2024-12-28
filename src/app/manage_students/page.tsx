// pages/manage-students.js
import React from 'react';
import Sidebar from "@/components/Sidebar";

const ManageStudents = () => {

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <h1 className="text-2xl font-bold">Manage Students</h1>
      <p>Welcome to the Manage Students page!</p>
    </div>
  );
};

export default ManageStudents;
