import React, { useState } from 'react';
import Selector from './maps/Selector';
import MapImage from './maps/MapImage';
import mapDescriptions from '../data/mapDescriptions.json';

const Maps = () => {
  const [map, setMap] = useState({
    image: null,
    file: mapDescriptions.maps[0].file,
    value: mapDescriptions.maps[0].value,
    title: mapDescriptions.maps[0].title,
    description: mapDescriptions.maps[0].description
  });
  const handleSelect = async (e) => {
    const selectedMap = mapDescriptions.maps.find(map => map.value === e.value);
    setMap({ ...selectedMap });
  };
  return (
    <div>
        <h1>{`Charles Rethman's Maps`}</h1>
        <Selector maps={mapDescriptions.maps} select={handleSelect}/>
        { map.value !== 'default'
          ? <MapImage map={map} />
          : null
        }
    </div>
  );
}

export default Maps;
