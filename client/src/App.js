// import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home, { Owner } from './components/Home';
// import Maps from './components/Maps';
// import Electronics from './components/Electronics';
import ImageView from './components/image-view/ImageView';
import './App.css';

function App() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e.target.id.substring(4)}`);
  }
  // const topics = Owner.topics;
  return (
    <div className='App'>
      <header>
        <p id='hed_' className='thumbnail_text' onClick={handleClick}>Home</p>
        {Owner().topics.map((topic, index) => (
          <p
            key={index}
            id={`hed_${topic.name}`}
            className='thumbnail_text'
            onClick={handleClick}
          >
            {topic.displayName}
          </p>
        ))}
      </header>
      <Routes>
        <Route path='/' element={<Home click={handleClick} />} />
        {Owner().topics.map((topic, index) => (
          <Route
            key={index}
            path={`/${topic.name}`}
            element={<ImageView topic={topic} owner={Owner}/>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;


        // <Route path='/maps' element={<Maps />} />
        // <Route path='/electronics' element={<Electronics />} />
