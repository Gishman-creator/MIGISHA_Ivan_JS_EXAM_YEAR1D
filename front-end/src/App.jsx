import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ParentComponent from './Parent'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<ParentComponent />} />
        <Route path="/some-path" element={<div>Some Path</div>} />
      </Routes>
    </div>
  );
};

export default App;
