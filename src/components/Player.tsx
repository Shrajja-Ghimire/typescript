// import { useParams } from 'react-router';

// const Player = () => {
//  const {playerId}= useParams()
//     // const movieUrl=`https://vidsrc.xyz/embed/movie/${playerId}}`;
//     const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;
//   return (
//     <div>
//    <iframe
//   className='w-full h-screen'
//   allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
//   src={movieUrl}
// />
//     </div>
//   )
// }

// export default Player
import { useParams } from 'react-router';

interface Props {
  type: 'movie' | 'tv';
}

const Player = ({ type }: Props) => {
  const { playerId } = useParams();
  const embedUrl = `https://vidsrc.xyz/embed/${type}/${playerId}`;

  return (
    <div>
      <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={embedUrl}
      />
    </div>
  );
};

export default Player;
