import React, { useState } from 'react';
import MyComponent from './components/MyComponent'
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('A');

  
  
  return (
    <div className="container">
        <MyComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
    </div>
  );
}


export default App;
