import { SearchResultContext } from '@/context/searchcontext'
import useMultisearch from '@/hooks/useMultisearch';
import { useContext } from 'react'
import Moviecard from './Moviecard';
import TvshowsCard from './TvshowsCard';

const SearchList = () => {
   const {searchData,searchText}= useContext(SearchResultContext);
   useMultisearch(searchText);
  //  console.log(searchData);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6 text-white">
      {searchData?.map((data)=>(
        <div key={data.id}>
    {data.media_type ==="movie"?(<Moviecard movieResult={data}/>):(<TvshowsCard tvshowResult={data}/>)}
        </div>
      ))}
    </div>
  )
}

export default SearchList
