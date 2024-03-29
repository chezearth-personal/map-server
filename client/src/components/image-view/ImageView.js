import { useState } from 'react';
import Selector from './Selector';
import Image from './Image';

const ImageView = ({ topic, owner }) => {
  const [imageView, setImageView] = useState({
    image: null,
    file: topic.images[0].file,
    value: topic.images[0].value,
    title: topic.images[0].title,
    description: topic.images[0].description
  });
  const handleSelect = async (e) => {
    const selectedImageView = topic.images.find(image => image.value === e.value);
    setImageView(selectedImageView);
  };
  return (
    <div>
        <h1>{`${owner().firstName} ${owner().lastName}'s ${topic.displayName}`}</h1>
        <Selector
          images={topic.images}
          select={handleSelect}
          text={`Select the ${topic.displayName} you wish to view`}
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


export default ImageView;
