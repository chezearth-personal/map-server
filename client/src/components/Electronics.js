import { useState } from 'react';
import Selector from './image-display/Selector';
import Image from './image-display/Image';
import portfolioData from '../data/portfolio-data.json';

const Electronics = () => {
  const images = portfolioData.owners[0].topics.find(topic => topic.name === 'electronics').images;
  const [elec, setElec] = useState({
    image: null,
    file: images[0].file,
    value: images[0].value,
    title: images[0].title,
    description: images[0].description
  });
  const handleSelect = async (e) => {
    const selectedElec = images.find(elec => elec.value === e.value);
    setElec(selectedElec);
  };
  return (
    <div>
        <h1>{`Charles Rethman's Electronics`}</h1>
        <Selector
          images={images}
          select={handleSelect}
          text='Select the electronics design you wish to view'
        />
        { elec.value === 'default'
          ? null
          : <Image
              imageObj={elec}
              path='electronics'
              imgClass='img__display'
            />
        }
    </div>
  );
}


export default Electronics;
