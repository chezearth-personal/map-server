import Image from './image-view/Image';

const Home = ({ click, owner }) => {
  /** Selects a random imgae from each group for display in the thumbnail */
  const randomPicks = owner.topics.map(topic => {
    return { ...{ name: topic.name }, ...{ random: (Math.floor(Math.random() * (topic.images.length - 1)) + 1) } }
  });
  return (
    <div>
      <h1>{`Welcome to ${owner.firstName} ${owner.lastName}'s Portfolio`}</h1>
      <h3>{`Please select a topic to view`}</h3>
      <div className='gallery'>
        {owner.topics.map((topic, index) => (
          <div key={index} className='thumbnail'>
            <p
              id={`txt_${topic.name}`}
              className='thumbnail_txt'
              onClick={click}
            >
              {topic.displayName}
            </p>
            <div className='thumbnail__img' onClick={click}>
              <Image
                imageObj={topic.images[randomPicks.find(randomPick => randomPick.name === topic.name).random]}
                path={`thumbnails/${topic.name}`}
                imgClass='img__thumbnail'
                id={`img_${topic.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
