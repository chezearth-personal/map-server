// import React from 'react';

export default function Selector({ images, select, text }) {
  const countries = new Set(images.map(map => map.country));
  const countriesArr = Array.from(countries);
  return (
    <div className='selector'>
      <label htmlFor='mapToView'>{text}</label>
      <select id='mapToView' name='mapToView' onChange={e => select(e.target)}>
      {countriesArr.length > 0
        ? countriesArr
          .map((country, index) => (
            <optgroup label={country} key={index}>
              {images
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
