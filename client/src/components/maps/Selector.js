// import React from 'react';

export default function Selector({ maps, select }) {
  const countries = new Set(maps.map(map => map.country));
  const countriesArr = Array.from(countries);
  return (
    <div className='selector'>
      <label htmlFor='mapToView'>Select the map you wish to view</label>
      <select id='mapToView' name='mapToView' onChange={e => select(e.target)}>
      {countriesArr.length > 0
        ? countriesArr
          .map((country, index) => (
            <optgroup label={country} key={index}>
              {maps
                .filter(map => map.country === country)
                .map((map, index) => (
                  <option value={map.value} key={index}>{map.title}</option>
                ))
              }
            </optgroup>
          ))
        : (<option value='default'>{'< Select Map >'}</option>)
      }
      </select>
    </div>
  )
}
