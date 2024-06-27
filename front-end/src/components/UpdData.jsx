import React, { useState } from 'react';
import "../styles/output.css";

const UpdData = ({ data, onCancel, onSuccess }) => {
    
  const initialFormData = {
    title: data?.title || '',
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    position: data?.position || '',
    company: data?.company || '',
    businessArena: data?.businessArena || '',
    employees: data?.employees || '',
    street: data?.streetNum || '',
    additionalInfo: data?.additionalInfo || '',
    place: data?.place || '',
    country: data?.country || '',
    phoneNumber: data?.phoneNumber || '',
    email: data?.email || '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      title: formData.title,
      firstName: formData.firstName,
      lastName: formData.lastName,
      position: formData.position,
      company: formData.company,
      businessArena: formData.businessArena,
      employees: formData.employees,
      streetNum: formData.street,
      additionalInfo: formData.additionalInfo,
      zipCode: "250",
      place: formData.place,
      country: formData.country,
      code: "250",
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    };

    try {
      const response = await fetch(`http://localhost:8000/update/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      onSuccess();
      window.location.reload();

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="bg-gray-900 text-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Update Employee Details</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <select name="title" value={formData.title} onChange={handleChange} required className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white">
          <option value="">Select Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>
        <div className="flex space-x-5">
          <input className="outline-none border-b p-2 rounded-sm w-3/5 bg-gray-800 text-white" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input className="outline-none border-b p-2 rounded-sm w-2/5 bg-gray-800 text-white" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <select name="position" value={formData.position} onChange={handleChange} className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" required>
          <option value="">Select Position</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="QA">QA</option>
          <option value="HR">HR</option>
        </select>
        <input className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
        <div className="flex space-x-5">
          <input className="outline-none border-b p-2 rounded-sm w-3/5 bg-gray-800 text-white" type="text" name="businessArena" placeholder="Business Arena" value={formData.businessArena} onChange={handleChange} required />
          <input className="outline-none border-b p-2 rounded-sm w-2/5 bg-gray-800 text-white" type="text" name="employees" placeholder="Employees" value={formData.employees} onChange={handleChange} required />
        </div>
        <input className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" type="text" name="street" placeholder="Street + Nr" value={formData.street} onChange={handleChange} required />
        <input className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" type="text" name="additionalInfo" placeholder="Additional Information" value={formData.additionalInfo} onChange={handleChange} required />
        <div className="flex space-x-5">
          <input className="outline-none border-b p-2 rounded-sm w-2/6 bg-gray-800 text-white" type="text" name="zipCode" placeholder="Zip Code" value="250" disabled />
          <select name="place" value={formData.place} onChange={handleChange} className="outline-none border-b p-2 rounded-sm w-4/6 bg-gray-800 text-white" required>
            <option value="">Select Place</option>
            <option value="Kigali">Kigali</option>
            <option value="Northern Province">Northern Province</option>
            <option value="Western Province">Western Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="Southern Province">Southern Province</option>
          </select>
        </div>
        <select name="country" value={formData.country} onChange={handleChange} className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" required>
          <option value="">Select Country</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Burundi">Burundi</option>
          <option value="Congo">Congo</option>
        </select>
        <div className="flex space-x-5">
          <input className="outline-none border-b p-2 rounded-sm w-2/6 bg-gray-800 text-white" type="text" name="code" placeholder="Code +" value="250" disabled />
          <input className="outline-none border-b p-2 rounded-sm w-4/6 bg-gray-800 text-white" type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <input className="outline-none border-b p-2 rounded-sm w-full bg-gray-800 text-white" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <div className="flex space-x-4 text-white my-8">
          <input type="checkbox" />
          <p className="text-xs">I do accept the <span className="decoration-solid">Terms and Conditions</span> of your site</p>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-[#434343] text-sm font-bold p-2 px-4 rounded-3xl drop-shadow-2xl hover:bg-[#333]">Update</button>
          <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 px-4 rounded-3xl drop-shadow-2xl">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdData;
