// import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Maps from './components/Maps';
import Electronics from './components/Electronics';
import './App.css';

function App() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e.target.id.substring(4)}`);
  }
  return (
    <div className='App'>
      <header>
        <p id='hed_' className='thumbnail_text' onClick={handleClick}>Home</p>
        <p id='hed_electronics' className='thumbnail_text' onClick={handleClick}>Electronic Design</p>
        <p id='hed_maps' className='thumbnail_text' onClick={handleClick}>Maps</p>
      </header>
      <Routes>
        <Route path='/' element={<Home click={handleClick} />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/electronics' element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;


