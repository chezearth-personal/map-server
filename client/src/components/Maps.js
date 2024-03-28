import { useState } from 'react';
import Selector from './Selector';
import Image from './Image';
import imageGallery from '../data/imageGallery.json';

const Maps = () => {
  const [map, setMap] = useState({
    image: null,
    file: imageGallery.images.maps[0].file,
    value: imageGallery.images.maps[0].value,
    title: imageGallery.images.maps[0].title,
    description: imageGallery.images.maps[0].description
  });
  const handleSelect = async (e) => {
    const selectedMap = imageGallery.images.maps.find(map => map.value === e.value);
    setMap({ ...selectedMap });
  };
  return (
    <div>
        <h1>{`Charles Rethman's Maps`}</h1>
        <Selector
          images={imageGallery.images.maps}
          select={handleSelect}
          text='Select the map you wish to view'
        />
        { map.value === 'default'
          ? null
          : <Image imageObj={map} />
        }
    </div>
  );
}

export default Maps;
