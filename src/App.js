import React, { useState } from 'react';
import MyComponent from './components/MyComponent'
import './App.css';




function App() {
  const [currentPage, setCurrentPage] = useState('A');

  
  
  return (
    <div className="Container">
      <div className='Contents'>
        <MyComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      
        
      
      </div>
    </div>
  );
}


export default App;
