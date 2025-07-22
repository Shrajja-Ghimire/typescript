import { useParams } from 'react-router';

const TvshowPlayer = () => {
 const {tvshowId}= useParams()
    // const movieUrl=`https://vidsrc.xyz/embed/movie/${playerId}}`;
    const showUrl = `https://vidsrc.xyz/embed/tv/${tvshowId}`;
  return (
    <div>
   <iframe
  className='w-full h-screen'
  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  src={showUrl}
/>
    </div>
  )
}

export default TvshowPlayer;
