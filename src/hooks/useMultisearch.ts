import { SearchResultContext } from '@/context/searchcontext'
import apiClient from '@/services/api-client'
import { useContext, useEffect } from 'react'

const useMultisearch = (input:String) => {
   const {setSearchData}= useContext(SearchResultContext)
 const fetchSearch =async()=>{
const res= await apiClient.get("/search/multi",{
    params:{
    query:input,
}
});
setSearchData(res.data.results)
}

useEffect(()=>{
    fetchSearch();
},[input]);


}

export default useMultisearch
