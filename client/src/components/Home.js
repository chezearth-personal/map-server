import portfolioData from '../data/portfolio-data.json';
import Image from './image-view/Image';


const Owner = () => portfolioData.owners[0];

const Home = ({ click }) => {
  // console.log('portfolioData = ', portfolioData);
  // console.log('portfolioData.owners[0] = ', portfolioData.owners[0]);
  const randomPicks = Owner().topics.map(topic => {
    return { ...{ name: topic.name }, ...{ random: (Math.floor(Math.random() * (topic.images.length - 1)) + 1) } }
  });
  console.log('randomPicks = ', randomPicks);
  // const electronics = portfolioData.owners[0]
    // .topics
    // .find(topic => topic.name === 'electronics');
  // console.log('electronics = ', electronics);
  // const numElectronics = electronics.images.length - 1;
  // const maps = portfolioData.owners[0]
    // .topics
    // .find(topic => topic.name === 'maps')
  // console.log('maps = ', maps);
  // const numMaps = maps.images.length - 1;
  // const randomElectronics = Math.floor(Math.random() * numElectronics) + 1;
  // const randomMap = Math.floor(Math.random() * numMaps) + 1;
  // console.log('randomElectronics = ', randomElectronics);
  // console.log('randomMap = ', randomMap);
  // const electronicsImage = {
    // image: null,
    // file: electronics.images[randomElectronics].file,
    // value: electronics.images[randomElectronics].value,
    // title: '',
    // description: ''
  // };
  // const mapImage = {
    // image: null,
    // file: maps.images[randomMap].file,
    // value: maps.images[randomMap].value,
    // title: '',
    // description: ''
  // };
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

        // <div className='thumbnail'>
          // <p
            // id={`txt_${electronics.name}`}
            // className='thumbnail_text'
            // onClick={click}
          // >
            // {electronics.displayName}
          // </p>
          // <div className='thumbnail__img' onClick={click}>
            // <Image
              // imageObj={electronicsImage}
              // path={`thumbnails/${electronics.name}`}
              // imgClass='img__thumbnail'
              // id={`img_${electronics.name}`}
            // />
          // </div>
        // </div>
        // <div className='thumbnail'>
          // <p
            // id={`txt_${maps.name}`}
            // className='thumbnail_text'
            // onClick={click}
          // >
            // {maps.displayName}
          // </p>
          // <div className='thumbnail__img' onClick={click}>
            // <Image
              // imageObj={mapImage}
              // path={`thumbnails/${maps.name}`}
              // imgClass='img__thumbnail'
              // id={`img_${maps.name}`}
            // />
          // </div>
        // </div>
