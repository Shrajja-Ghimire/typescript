import useTrendinglist from '@/hooks/useTrendinglist'
import { RiArrowDropDownLine } from "react-icons/ri";
import Moviecard from '../Moviecard';
import { useState } from 'react';

const TrendingMovie = () => {
 const{trendingData} =  useTrendinglist("movie");
 const [expand,setExpand]=useState(false);
 console.log(trendingData);
  return (
    <div className='p-3 mb-4'>
        <div className='flex items-center gap-2 cursor-pointer'
         onClick={()=>setExpand(!expand)}>
            <h1 className='text-3xl font-bold'>Trending Movie</h1>
         <span className='mt-5 text-4xl font-semibold text-gray-500'>
      <RiArrowDropDownLine />
      </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6">
         {(expand ? trendingData : trendingData?.slice(0, 10))?.map((movie) => (
          <div key={movie.id}>
            <Moviecard movieResult={movie} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default TrendingMovie
