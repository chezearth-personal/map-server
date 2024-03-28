import { useState } from 'react';
import Selector from './maps/Selector';
import MapImage from './maps/MapImage';
import imageGallery from '../data/imageGallery.json';

const Maps = () => {
  const [map, setMap] = useState({
    image: null,
    file: imageGallery.images[1].maps[0].file,
    value: imageGallery.images[1].maps[0].value,
    title: imageGallery.images[1].maps[0].title,
    description: imageGallery.images[1].maps[0].description
  });
  const handleSelect = async (e) => {
    const selectedMap = imageGallery.images[1].maps.find(map => map.value === e.value);
    setMap({ ...selectedMap });
  };
  return (
    <div>
        <h1>{`Charles Rethman's Maps`}</h1>
        <Selector maps={imageGallery.images[1].maps} select={handleSelect}/>
        { map.value !== 'default'
          ? <MapImage map={map} />
          : null
        }
    </div>
  );
}

export default Maps;
