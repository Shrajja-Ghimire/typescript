
import useTrendinglist from '@/hooks/useTrendinglist'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';
import TvshowsCard from '../TvshowsCard';

const Trendingtv = () => {
 const{trendingData} =  useTrendinglist("tv");
 const [expand,setExpand]=useState(false);
 console.log(trendingData);
  return (
    <div className='p-3 mb-4'>
        <div className='flex items-center gap-2 cursor-pointer'
         onClick={()=>setExpand(!expand)}>
            <h1 className='text-3xl font-bold'>Trending Tvshows</h1>
         <span className='mt-5 text-4xl font-semibold text-gray-500'>
      <RiArrowDropDownLine />
      </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6">
         {(expand ? trendingData : trendingData?.slice(0, 10))?.map((tvshow) => (
          <div key={tvshow.id}>
            <TvshowsCard tvshowResult={tvshow} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Trendingtv
