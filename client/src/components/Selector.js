import React from 'react';

export default function Selector({ maps, select }) {
  return (
    <div className='selector'>
      <label htmlFor='mapToView'>Select the map you wish to view</label>
      <select id='mapToView' name='mapToView' onChange={e => select(e.target)}>
      {maps.length > 0
        ? maps
          .map((map, index) => (
            <option value={map.value} key={index}>{map.title}</option>
          ))
        : (<option value='default'>{'< Select Map >'}</option>)
      }
      </select>
    </div>
  )
}
