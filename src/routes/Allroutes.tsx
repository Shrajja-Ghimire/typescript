import Movielist from '../components/Movielist';
import Tvshows from '../components/Tvshows';
import {  Routes, Route } from 'react-router';
// import App from '../App';
const Allroutes = () => {
  return (
    
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/movies" element={<Movielist />} />
        <Route path="/tvshows" element={<Tvshows />} />
      </Routes>
    
  );
};

export default Allroutes;