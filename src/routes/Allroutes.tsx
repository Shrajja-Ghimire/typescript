import SearchList from '@/components/SearchList';
import Movielist from '../components/Movielist';
import Tvshows from '../components/Tvshows';
import {  Routes, Route } from 'react-router';
import Trending from '@/components/Trending/Trending';
import Player from '@/components/Player';
// import TvshowPlayer from '@/components/Tvshowplayer';
// import App from '../App';
const Allroutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movielist />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/search/:searchName/" element={<SearchList/>} />
        {/* <Route path="/player/:playerId" element={<Player/>}/>
        <Route path="/player/:tvshowId" element={<TvshowPlayer/>}/> */}
        <Route path="/player/movie/:playerId" element={<Player type="movie" />} />
<Route path="/player/tv/:playerId" element={<Player type="tv" />} />

      </Routes>
    
  );
};

export default Allroutes;