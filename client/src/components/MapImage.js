import React from 'react';
import useImage from '../hooks/useImage';

export default function MapImage(props) {
  const { loading, error, image } = useImage(props.map.file);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
            <div className='map'>
              <img src={image.default} className='hazard_maps' alt={props.map.title} />
            </div>
            <div className='mapDescriptions'>
              <h4>{props.map.title}</h4>
              <p>{props.map.description}</p>
            </div>
    </div>
  );
}

