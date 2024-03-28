import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Maps from './components/Maps';
import Electronics from './components/Electronics';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <header>
        <a href={navigate('/')}>Home</a>
        <a href={navigate('/Maps')}>Maps</a>
        <a href={navigate('/Electronics')}>Electronics</a>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/maps' element={<Maps />} />
            <Route path='/electronics' element={<Electronics />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
