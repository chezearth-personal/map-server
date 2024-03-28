// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Maps from './components/Maps';
import Electronics from './components/Electronics';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <a href='/'>Home</a>
        <a href='/maps'>Maps</a>
        <a href='/electronics'>Electronics</a>
      </header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/electronics' element={<Electronics />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


