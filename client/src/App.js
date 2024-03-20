// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import mapDescriptions from './resources/mapDescriptions.json';
import livelihood_zones_a3 from './resources/livelihood_zones_v2_a3.png';
import rs_vci from './resources/rs_vci.png';
import rs_vci_hazard from './resources/rs_vci_hazard.png';
import hazard_affected from './resources/hazard_affected.png';
import hazard_agricregions from './resources/hazard_agricregions.png';
import hazard_livezones from './resources/hazard_livezones.png';
import hazard_sas from './resources/hazard_sas.png';
import outcome_pop_at_risk_fpl from './resources/outcome_pop-at-risk_fpl.png';
import outcome_def_per_cap_fpl from './resources/outcome_def-per-cap_fpl.png';
import outcome_pop_at_risk_fe from './resources/outcome_pop-at-risk_fe.png';
import outcome_def_per_at_risk_fpl from './resources/outcome_def-per-at_risk_fpl.png';
import outcome_pop_at_risk_fpl_hazard from './resources/outcome_pop-at-risk_fpl_hazard.png';

function App() {
  // console.log(mapDescriptions);
  const [map, setMap] = useState({
    image: null,
    value: mapDescriptions.maps[0].value,
    title: mapDescriptions.maps[0].title,
    description: mapDescriptions.maps[0].description
  });
  const handleSelect = async (e) => {
    const mapObject = (test) => {
      switch(test) {
        case 'livelihood_zones_a3':
          return livelihood_zones_a3;
        case 'rs_vci':
          return rs_vci;
        case 'rs_vci_hazard':
          return rs_vci_hazard;
        case 'hazard_affected':
          return hazard_affected;
        case 'hazard_agricregions':
          return hazard_agricregions;
        case 'hazard_livezones':
          return hazard_livezones;
        case 'hazard_sas':
          return hazard_sas;
        case 'outcome_pop_at_risk_fpl':
          return outcome_pop_at_risk_fpl;
        case 'outcome_def_per_cap_fpl':
          return outcome_def_per_cap_fpl;
        case 'outcome_pop_at_risk_fe':
          return outcome_pop_at_risk_fe;
        case 'outcome_def_per_at_risk_fpl':
          return outcome_def_per_at_risk_fpl;
        case 'outcome_pop_at_risk_fpl_hazard':
          return outcome_pop_at_risk_fpl_hazard;
        default:
          return null;
      }
    }
    const selectedMap = mapDescriptions.maps.find(map => map.value === e.value);
    // setMap({ ...selectedMap });
    setMap(Object.assign({ ...selectedMap }, { image: mapObject(selectedMap.value) }));
  };
  return (
    <div className='App'>
      <main>
        <h1>Charles Rethman's Maps</h1>
        <div className='selector'>
          <label htmlFor='mapToView'>Select the map you wish to view</label>
          <select id='mapToView' name='mapToView' onChange={e => handleSelect(e.target)}>
          {mapDescriptions.maps.length > 0
            ? mapDescriptions.maps
              .map((map, index) => (
                <option value={map.value} key={index}>{map.title}</option>
              ))
            : (<option value='default'>{'< Select Map >'}</option>)
          }
          </select>
        </div>
        { map.value !== 'default'
          ? <div>
              <div className='map'>
                <img src={map.image} className='hazard_maps' alt={map.title} />
              </div>
              <div className='mapDescriptions'>
                <h4>{mapDescriptions.heading}</h4>
                <p>{map.description}</p>
              </div>
            </div>
          : null
        }
      </main>
    </div>
  );
}

export default App;
