import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import ImageView from './components/image-view/ImageView';
import portfolioData from './data/portfolio-data.json';
import './App.css';

const Owner = () => portfolioData.owners[0];

function App() {
  const initImage = ({
    file: '',
    value: 'default',
    title: '',
    description: ''
  })
  const [ imageView, setImageView] = useState(initImage);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setImageView(initImage);
    navigate(`/${e.target.id.substring(4)}`);
  }
  // console.log('App.js: imageView =', imageView);
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
        <Route path='/' element={<Home click={handleClick} owner={Owner()} />} />
        {Owner().topics.map((topic, index) => (
          <Route
            key={index}
            path={`/${topic.name}`}
            element={<ImageView owner={Owner} topic={topic} imageView={imageView} setImageView={setImageView} onClick={handleClick} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
