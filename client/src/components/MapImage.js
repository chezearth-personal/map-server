import React from 'react';
import useImage from '../hooks/useImage';

export default function MapImage({ map }) {
  const { loading, error, image } = useImage(map.file);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
            <div className='map'>
              <img src={image.default} className='hazard_maps' alt={map.title} />
            </div>
            <div className='mapDescriptions'>
              <h4>{map.title}</h4>
              <p>{map.description}</p>
            </div>
    </div>
  );
}

