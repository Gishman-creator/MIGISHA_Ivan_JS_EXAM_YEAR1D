import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = ({ data, onViewMore }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Employee Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 shadow-md rounded-lg text-white">
          <thead>
            <tr className="bg-gray-700 text-gray-300 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Position</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm font-light">
            {data.map((item, index) => (
              <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.title}</td>
                <td className="py-3 px-6 text-left">{item.firstName} {item.lastName}</td>
                <td className="py-3 px-6 text-left">{item.position}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => onViewMore(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-center">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </Link>
      </div>
    </div>
  );
};

export default DataTable;
