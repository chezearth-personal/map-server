// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import imageGallery from '../data/imageGallery.json';
import Image from './image-display/Image';

const Home = ({ click }) => {
  const numMaps = imageGallery.images.maps.length - 1;
  const numElectronics = imageGallery.images.electronics.length - 1;
  const randomMap = Math.floor(Math.random() * numMaps);
  const randomElectronics = Math.floor(Math.random() * numElectronics);
  const mapImage = {
    image: null,
    file: imageGallery.images.maps[randomMap + 1].file,
    value: imageGallery.images.maps[randomMap + 1].value,
    title: '',
    description: ''
  };
  const electronicsImage = {
    image: null,
    file: imageGallery.images.electronics[randomElectronics + 1].file,
    value: imageGallery.images.electronics[randomElectronics + 1].value,
    title: '',
    description: ''
  };
  return (
    <div>
      <h1>{`Welcome to Charles Rethman's Portfolio`}</h1>
      <h3>{`Please select a gallery to view`}</h3>
      <div className='gallery'>
        <div className='thumbnail'>
          <p
            id='txt_electronics'
            className='thumbnail_text'
            onClick={click}
          >
            Electronic Design
          </p>
          <div className='thumbnail__img' onClick={click}>
            <Image
              imageObj={electronicsImage}
              path='electronics'
              imgClass='img__thumbnail'
              id='img_electronics'
            />
          </div>
        </div>
        <div className='thumbnail'>
          <p
            id='txt_maps'
            className='thumbnail_text'
            onClick={click}
          >
            Maps
          </p>
          <div className='thumbnail__img' onClick={click}>
            <Image
              imageObj={mapImage}
              path='maps'
              imgClass='img__thumbnail'
              id='img_maps'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
