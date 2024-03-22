import React from 'react';

export default function Selector(props) {
  return (
    <div className='selector'>
      <label htmlFor='mapToView'>Select the map you wish to view</label>
      <select id='mapToView' name='mapToView' onChange={e => props.select(e.target)}>
      {props.maps.length > 0
        ? props.maps
          .map((map, index) => (
            <option value={map.value} key={index}>{map.title}</option>
          ))
        : (<option value='default'>{'< Select Map >'}</option>)
      }
      </select>
    </div>
  )
}
