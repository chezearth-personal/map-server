// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import livelihood_zones from './resources/livelihood_zones_v2_a3.png';
import rs_vci from './resources/rs_vci.png';
import rs_vci_hazard from './resources/rs_vci_hazard.png';
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
            <option value='livelihood_zones'>Livelihood Zones</option>
            <option value='rs_vci'>Remote Sensing Vegetation Condition Index</option>
            <option value='rs_vci_hazard'>Remote Sensing Vegetation Condition Index with Hazard Defined</option>
            <option value='hazard_affected'>Hazard Affected Areas</option>
            <option value='hazard_agriregions'>Hazard and Agricultural Regions</option>
            <option value='hazard_livezones'>Hazard and Livelihood zones</option>
            <option value='hazard_sas'>Hazard and Enumeartion Small Areas</option>
          </select>
        </div>
        <div className='maps'>
          {
            map === 'livelihood_zones'
              ? <img src={livelihood_zones} className='hazard_maps' alt='Livelihood Zones in South Africa' />
              : ''
          }
          {
            map === 'rs_vci'
              ? <img src={rs_vci} className='hazard_maps' alt='Remote Sensing Vegetation Condition Index' />
              : ''
          }
          {
            map === 'rs_vci_hazard'
              ? <img src={rs_vci_hazard} className='hazard_maps' alt='Remote Sensing Vegetation Condition Index with hazard defined' />
              : ''
          }
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
