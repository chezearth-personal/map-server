import { useState } from 'react';
import Selector from './image-display/Selector';
import Image from './image-display/Image';
import imageGallery from '../data/imageGallery';

const Electronics = () => {
  const [elec, setElec] = useState({
    image: null,
    file: imageGallery.images.electronics[0].file,
    value: imageGallery.images.electronics[0].value,
    title: imageGallery.images.electronics[0].title,
    description: imageGallery.images.electronics[0].description
  });
  console.log(elec);
  const handleSelect = async (e) => {
    console.log('e.value:', e.value);
    const selectedElec = imageGallery.images.electronics.find(elec => elec.value === e.value);
    console.log('selectedElec:', selectedElec);
    setElec(selectedElec);
  };
  return (
    <div>
        <h1>{`Charles Rethman's Electronics`}</h1>
        <Selector
          images={imageGallery.images.electronics}
          select={handleSelect}
          text='Select the electronics design you wish to view'
        />
        { elec.value === 'default'
          ? null
          : <Image imageObj={elec} path='electronics' />
        }
    </div>
  );
}


export default Electronics;
