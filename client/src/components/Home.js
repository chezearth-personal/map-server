import portfolioData from '../data/portfolio-data.json';
import Image from './image-view/Image';


const Owner = () => portfolioData.owners[0];

const Home = ({ click }) => {
  // console.log('portfolioData = ', portfolioData);
  // console.log('portfolioData.owners[0] = ', portfolioData.owners[0]);
  const randomPicks = Owner().topics.map(topic => {
    return { ...{ name: topic.name }, ...{ random: (Math.floor(Math.random() * (topic.images.length - 1)) + 1) } }
  });
  // console.log('randomPicks = ', randomPicks);
  return (
    <div>
      <h1>{`Welcome to ${Owner().firstName} ${Owner().lastName}'s Portfolio`}</h1>
      <h3>{`Please select a gallery to view`}</h3>
      <div className='gallery'>
        {Owner().topics.map((topic, index) => (
          <div key={index} className='thumbnail'>
            <p
              id={`txt_${topic.name}`}
              className='thumbnail_text'
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
export { Owner };
