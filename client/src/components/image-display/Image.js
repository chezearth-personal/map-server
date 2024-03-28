import useImage from '../hooks/useImage';

export default function Image({ imageObj, ...props }) {
  const { loading, error, image } = useImage(`${props.path}/${imageObj.file}`);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className={props.imgClass}>
        <img
          className={props.imgClass}
          src={image.default}
          alt={imageObj.title}
          id={props.id}
        />
      </div>
      <div className='img__descriptions'>
        <h4>{imageObj.title}</h4>
        <p className='description'>{imageObj.description}</p>
      </div>
    </div>
  );
}
