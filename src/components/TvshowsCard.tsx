import type { TvshowResult } from '@/hooks/useTVshows'
// import React from 'react'

interface Props{
tvshowResult: TvshowResult
}
const TvshowsCard = ({tvshowResult}:Props) => {
  return (
    <div>
       <div className="overflow-hidden shadow-md bg-white ">
    <img
      src={`https://image.tmdb.org/t/p/w500${tvshowResult.poster_path}`}
      alt="Poster"
      className="w-full h-70 object-cover"
    />
    {/* Optional overlay */}
   
      <h1 className="font-semibold truncate">
        {tvshowResult.title? tvshowResult.title : tvshowResult.name}
      </h1>
  </div>
    </div>
  )
}

export default TvshowsCard
