export { Selector };

function Selector({ images, select, text, initial }) {
  const groups = new Set(images.map(map => map.group));
  const groupsArr = Array.from(groups);
  return (
    <div className='selector'>
      <label htmlFor='mapToView'>{text}</label>
        <select id='mapToView' name='mapToView' onChange={e => select(e.target)} value={initial}>
        {groupsArr.length > 0
          ? groupsArr
            .map((group, index) => (
              <optgroup label={group} key={index}>
                {images
                  .filter(map => map.group === group)
                  .map((map, index) => (
                    <option value={map.value} key={index}>{map.title}</option>
                ))
              }
              </optgroup>
            ))
          : (<option selected='true' value='default'>{'< Select Map >'}</option>)
        }
        </select>
    </div>
  )
}
