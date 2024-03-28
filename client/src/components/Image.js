// import React from 'react';
import useImage from './hooks/useImage';

export default function Image({ imageObj }) {
  const { loading, error, image } = useImage(imageObj.file);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className='map'>
        <img src={image.default} className='hazard_maps' alt={imageObj.title} />
      </div>
      <div className='mapDescriptions'>
        <h4>{imageObj.title}</h4>
        <p>{imageObj.description}</p>
      </div>
    </div>
  );
}
