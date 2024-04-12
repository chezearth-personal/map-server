import { Selector } from './';
import { Image } from './';

export { ImageView };

function ImageView({
  owner,
  topic,
  imageView,
  setImageView
}) {
  // console.log('topic =', topic);
  const handleSelect = async (e) => {
    // console.log('e.value =', e.value);
    const selectedImageView = topic.images.find(image => image.value === e.value);
    setImageView(selectedImageView);
  };
  // console.log('imageView =', imageView);
  // console.log('topic =', topic);
  return (
    <div>
        <h1>{`${owner().firstName} ${owner().lastName}'s ${topic.displayName}`}</h1>
        <Selector
          images={topic.images}
          select={handleSelect}
          text={`Select the ${topic.displayName} you wish to view`}
          initial={imageView.value}
        />
        { imageView.value === 'default'
          ? null
          : <Image
              imageObj={imageView}
              path={topic.name}
              imgClass='img__display'
            />
        }
    </div>
  );
}

// export default ImageView;
