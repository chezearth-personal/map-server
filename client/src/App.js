// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import hazard_affected from './resources/hazard_affected.png';
import hazard_agriregions from './resources/hazard_agricregions.png';
import hazard_livezones from './resources/hazard_livezones.png';
import hazard_sas from './resources/hazard_sas.png';

function App() {
  const [map, setMap] = useState('');
  const handleSelect = (e) => {
    console.log(e.value);
    setMap(e.value);
  };
  return (
    <div className='App'>
      <main>
        <h1>Charles Rethman's Maps</h1>
        <div className='selector'>
          <label htmlFor='mapToView'>Select the map you wish to view</label>
          <select id='mapToView' name='mapToView' onChange={e => handleSelect(e.target)}>
            <option value=''>Select Map</option>
            <option value='hazard_affected'>Hazard Affected</option>
            <option value='hazard_agriregions'>Hazard Agriregions</option>
            <option value='hazard_livezones'>Hazard Livezones</option>
            <option value='hazard_sas'>Hazard SAS</option>
          </select>
        </div>
        <div className='maps'>
          {map === 'hazard_affected'
            ? <img src={hazard_affected} className='hazard_maps' alt='Hazard definition in South Africa' />
            : ''
          }
          {map === 'hazard_agriregions'
            ? <img src={hazard_agriregions} className="hazard_maps" alt="Hazard, superimposed on agricultural regions in South Africa" />
            : ''
          }
          {map === 'hazard_livezones'
            ? <img src={hazard_livezones} className="hazard_maps" alt="Hazard, superimposed on livelihood zones in South Africa" />
            : ''
          }
          {map === 'hazard_sas'
            ? <img src={hazard_sas} className="hazard_maps" alt="Hazard, superimposed on enumeration small areas in South Africa"/>
            : ''
          }
        </div>
      </main>
    </div>
  );
}

export default App;
