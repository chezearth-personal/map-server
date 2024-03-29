import { useState } from 'react';
import Selector from './image-display/Selector';
import Image from './image-display/Image';
import portfolioData from '../data/portfolio-data.json';

const Maps = () => {
  const [map, setMap] = useState({
    image: null,
    file: portfolioData.images.maps[0].file,
    value: portfolioData.images.maps[0].value,
    title: portfolioData.images.maps[0].title,
    description: portfolioData.images.maps[0].description
  });
  const handleSelect = async (e) => {
    const selectedMap = portfolioData.images.maps.find(map => map.value === e.value);
    setMap(selectedMap);
  };
  return (
    <div>
        <h1>{`Charles Rethman's Maps`}</h1>
        <Selector
          images={portfolioData.images.maps}
          select={handleSelect}
          text='Select the map you wish to view'
        />
        { map.value === 'default'
          ? null
          : <Image
              imageObj={map}
              path='maps'
              imgClass='img__display'
            />
        }
    </div>
  );
}

export default Maps;
