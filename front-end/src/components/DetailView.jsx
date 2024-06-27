import React from 'react';

const DetailView = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-900 text-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
      <div>
        <p><strong>Title:</strong> {data.title}</p>
        <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
        <p><strong>Position:</strong> {data.position}</p>
        <p><strong>Company:</strong> {data.company}</p>
        <p><strong>Business Arena:</strong> {data.businessArena}</p>
        <p><strong>Employees:</strong> {data.employees}</p>
        <p><strong>Address:</strong> {data.streetNum}</p>
        <p><strong>Additional Information:</strong> {data.additionalInfo}</p>
        <p><strong>Location:</strong> {data.place}, {data.country}</p>
        <p><strong>Phone:</strong> {data.phoneNumber}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DetailView;
