import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./styles/output.css";
import DataTable from './components/DataTable';
import DetailView from './components/DetailView';
import UpdData from './components/UpdData';
import AddData from './components/AddData'; 

const ParentComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewMore = (index) => {
    if (index >= 0 && index < data.length) {
      setSelectedItem(data[index]);
    } else {
      console.error('Invalid index or empty data array');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      }

      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);
      setSelectedItem(null); 

      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="parent-component bg-gray-800 text-white min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Employee Information</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <Routes>
              <Route
                path="/"
                element={<DataTable data={data} onViewMore={handleViewMore} />}
              />
              <Route
                path="/detail/:id"
                element={<DetailView data={selectedItem} onEdit={() => navigate('/update')} onDelete={() => handleDelete(selectedItem._id)} />}
              />
              <Route
                path="/update"
                element={<UpdData data={selectedItem} onSuccess={() => navigate('/')} onCancel={() => navigate('/')} />}
              />
              <Route
                path="/add"
                element={<AddData onSuccess={() => navigate('/')} onCancel={() => navigate('/')} />} 
              />
            </Routes>
            {selectedItem && (
              <DetailView data={selectedItem} onEdit={() => navigate('/update')} onDelete={() => handleDelete(selectedItem._id)} />
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
        <button onClick={() => navigate('/add')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Data
        </button>
      </div> */}
    </div>
  );
};

export default ParentComponent;
