import React, { useState } from "react";
import "../styles/output.css";

const Badge = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInfo: "",
    place: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Define dataToSubmit here
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
      country: formData.country,
      code: "250",
      phoneNumber: formData.phoneNumber,
    };
  
    console.log("Form submitted:", dataToSubmit);
  
    try {
      const response = await fetch("http://localhost:8000/add", {
        method: "POST",
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
      // Handle success, e.g., show a success message or redirect
  
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    }
  };
  
  

  return (
    <div className="bg-gray-800 m-0 p-10 font-semibold h-full flex flex-col items-center justify-center">
      <div className="bg-[#e9e9e9] h-fit flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start max-w-full lg:min-w-[70%] rounded-md shadow-2xl overflow-hidden">
        <div className="bg-[#e9e9e9] h-full w-full md:w-1/2 p-8 flex flex-col md:top-0">
          <h3 className="font-semibold text-xl mb-4">General Information</h3>
          <form onSubmit={handleSubmit} className="bg-[#e9e9e9] space-y-2 flex flex-col items-start justify-center pb-28 border-black">
            <select name="title" value={formData.title} onChange={handleChange} required className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-full">
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
            <div className="flex space-x-5">
              <input className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-3/5" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}  required/>
              <input className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-2/5" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}  required/>
            </div>
            <select name="position" value={formData.position} onChange={handleChange} className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-full" required>
              <option value="">Select Position</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="QA">QA</option>
              <option value="HR">HR</option>
            </select>
            <input className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-full" type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange}  required/>
            <div className="flex space-x-5">
              <input className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-3/5" type="text" name="businessArena" placeholder="Business Arena" value={formData.businessArena} onChange={handleChange} required/>
              <select name="employees" value={formData.employees} onChange={handleChange} required className="bg-[#e9e9e9] outline-none border-b p-2 rounded-sm w-2/5">
                <option value="">Select Employees</option>
                <option value="1">1-10</option>
                <option value="2">11-50</option>
                <option value="3">51-100</option>
                <option value="4">101-500</option>
                <option value="5">500+</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-[#1e1e1e] placeholder-[#bcbcbc4e] h-fit w-full md:w-1/2 p-10 flex flex-col overflow-hidden">
          <h3 className="font-semibold text-xl mb-4 text-white">General Information</h3>
          <form onSubmit={handleSubmit} className="space-y-2 flex flex-col items-start justify-center border-white">
            <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-full" type="text" name="street" placeholder="Street + Nr" value={formData.street} onChange={handleChange}  required/>
            <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-full" type="text" name="additionalInfo" placeholder="Additional Information" value={formData.additionalInfo} onChange={handleChange}  required/>
            <div className="flex space-x-5">
              <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-2/6" type="text" name="zipCode" placeholder="Zip Code" value="250" disabled />
              <select name="place" value={formData.place} onChange={handleChange} required className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-4/6">
                <option value="">Select Place</option>
                <option value="City A">Kigali</option>
                <option value="City B">Northern Province</option>
                <option value="City C">Western Province</option>
                <option value="City D">Eastern Province</option>
                <option value="City E">Southern Province</option>
              </select>
            </div>
            <select name="country" value={formData.country} onChange={handleChange} required className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-full">
              <option value="">Select Country</option>
              <option value="Country A">Rwanda</option>
              <option value="Country B">Kenya</option>
              <option value="Country C">Tanzania</option>
              <option value="Country D">Burundi</option>
              <option value="Country E">Congo</option>
            </select>
            <div className="flex space-x-5">
              <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-2/6" type="text" name="code" placeholder="Code +" value="250" disabled />
              <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-4/6" type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange}  required/>
            </div>
            <input className="bg-[#1e1e1e] outline-none border-b text-white p-2 rounded-sm w-full" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  required/>
            <div className="flex space-x-4 text-white my-8">
              <input type="checkbox" />
              <p className="text-xs">I do accept the <span className="decoration-solid">Terms and Conditions</span> of your site</p>
            </div>
            <button type="submit" className="bg-white text-sm font-bold p-2 px-4 w-fit rounded-3xl drop-shadow-2xl hover:bg-[#d9d9d9]">Register Badge</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Badge;
