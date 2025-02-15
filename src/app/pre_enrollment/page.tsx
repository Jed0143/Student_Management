"use client";

import React, { useState } from "react";
import Link from "next/link";

const PreEnrollment = () => {
  const [formData, setFormData] = useState({
    childName: "",
    sex: "",
    birthday: "",
    age: "",
    registered: "",
    address: "",
    firstLanguage: "",
    secondLanguage: "",
    guardian: "",
    relationship: "",
    guardianContact: "",
    motherName: "",
    motherAddress: "",
    motherWork: "",
    motherContact: "",
    fatherName: "",
    fatherAddress: "",
    fatherWork: "",
    fatherContact: "",
    emergencyName: "",
    emergencyContact: "",
    emergencyWork: "",
    signature: null,
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: { target: { files?: any; name?: any; value?: any; type?: any; }; }) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    if (name === "birthday") {
      calculateAge(value);
    }
  };

  const calculateAge = (birthday: string | number | Date) => {
    if (!birthday) return;
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setFormData((prevData) => ({ ...prevData, age: age.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData) {
      console.error("formData is undefined or null");
      return;
    }
  
    const formDataToSend = new FormData();
  
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formDataToSend.append(key, value.toString()); // Ensure it's a string
      }
    });
  
    try {
      const response = await fetch("/api/enrollment", {
        method: "POST",
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert("Enrollment Submitted Successfully!");
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };  
  

  const handleSameAsFather = () => {
    setFormData((prevData) => ({
      ...prevData,
      guardian: prevData.fatherName,
      guardianContact: prevData.fatherContact,
      relationship: "Father",
    }));
  };

  const handleSameAsMother = () => {
    setFormData((prevData) => ({
      ...prevData,
      guardian: prevData.motherName,
      guardianContact: prevData.motherContact,
      relationship: "Mother",
    }));
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="w-full max-w-4xl px-8 py-10 bg-white rounded-lg shadow-2xl relative">
        <Link href="/" className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Back</Link>
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">Pre-Enrollment Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">Name of Child</label>
              <input type="text" name="childName" className="w-full p-2 border rounded" value={formData.childName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Gender</label>
              <select name="sex" className="w-full p-2 border rounded" value={formData.sex} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">Birthday</label>
              <input type="date" name="birthday" className="w-full p-2 border rounded" value={formData.birthday} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Age</label>
              <input type="text" name="age" className="w-full p-2 border rounded bg-gray-100" value={formData.age} readOnly />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">First Language</label>
              <input type="text" name="firstLanguage" className="w-full p-2 border rounded" value={formData.firstLanguage} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Second Language</label>
              <input type="text" name="secondLanguage" className="w-full p-2 border rounded" value={formData.secondLanguage} onChange={handleChange} required />
            </div>
          </div>

          <p className="text-1xl font-extrabold text-red-500 mb-8 text-start">GUARDIAN</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">Guardian Name</label>
              <input type="text" name="guardian" className="w-full p-2 border rounded" value={formData.guardian} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Guardian Contact Number</label>
              <input type="text" name="guardianContact" className="w-full p-2 border rounded" value={formData.guardianContact} onChange={handleChange} required />
            </div>
          </div>

          <p className="text-1xl font-extrabold text-red-500 mb-8 text-start">MOTHER:</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block font-semibold">Mother's Name</label>
              <input type="text" name="motherName" className="w-full p-2 border rounded" value={formData.motherName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Mother Contact Number</label>
              <input type="text" name="motherContact" className="w-full p-2 border rounded" value={formData.motherContact} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Mother's Work</label>
              <input type="text" name="motherWork" className="w-full p-2 border rounded" value={formData.motherWork} onChange={handleChange} required />
            </div>
          </div>

          <p className="text-1xl font-extrabold text-red-500 mb-8 text-start">FATHER:</p>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">Father's Name</label>
              <input type="text" name="fatherName" className="w-full p-2 border rounded" value={formData.fatherName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Father Contact Number</label>
              <input type="text" name="fatherContact" className="w-full p-2 border rounded" value={formData.fatherContact} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-semibold">Father's Work</label>
              <input type="text" name="fatherWork" className="w-full p-2 border rounded" value={formData.fatherWork} onChange={handleChange} required />
            </div>
          </div>

          <p className="text-1xl font-extrabold text-red-500 mb-8 text-start">IN CASE OF IMERGENCY, please contact:</p>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
          <div className="flex space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" onClick={handleSameAsFather}>Same as Father</button>
            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg" onClick={handleSameAsMother}>Same as Mother</button>
          </div>
            <div>
            <label className="block font-semibold">Emergency Contact Name</label>
            <input type="text" name="emergencyName" className="w-full p-2 border rounded" value={formData.emergencyName} onChange={handleChange} required />
            </div>
            <div>
            <label className="block font-semibold">Emergency Contact No:</label>
            <input type="text" name="emergencyContact" className="w-full p-2 border rounded" value={formData.emergencyContact} onChange={handleChange} required />
            </div>
            <div>
            <label className="block font-semibold">Emergency Work</label>
            <input type="text" name="emergencyWork" className="w-full p-2 border rounded" value={formData.emergencyWork} onChange={handleChange} required />
           </div>
            <div>
              <label className="block font-semibold">UPLOAD SIGNATURE OVER PRINTED NAME OF PARENT/GUARDIAN</label>
              <input type="file" name="signature" accept="image/*" className="w-full p-2 border rounded" onChange={handleChange} required />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreEnrollment;
