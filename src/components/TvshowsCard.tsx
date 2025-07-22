import type { TvshowResult } from '@/hooks/useTVshows'
import { useNavigate } from 'react-router'
// import React from 'react'

interface Props{
tvshowResult: TvshowResult
}
const TvshowsCard = ({tvshowResult}:Props) => {
  const navigate=useNavigate();
  return (
    
       <div className="overflow-hidden shadow-md bg-white " onClick={()=>{navigate(`/player/tv/${tvshowResult.id}`)}}>
    <img
      src={`https://image.tmdb.org/t/p/w500${tvshowResult.poster_path}`}
      alt="Poster"
      className="w-full h-70 object-cover"
    />
      <h1 className="font-semibold truncate">
        {tvshowResult.title? tvshowResult.title : tvshowResult.name}
      </h1>
  </div>
  )
}

export default TvshowsCard
