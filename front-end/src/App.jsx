import React, { useState } from 'react';
import Badge from './components/Badge';

function App() {
  const [isOpen, setOpen]= useState(false)

  return (
    <div>

    <Badge />

    </div>
  );
}

export default App;
