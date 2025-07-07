import apiClient from "@/services/api-client"
import { useEffect, useState } from "react";
export interface TvshowResult{
    adult:Boolean;
    id:number;
    original_language:string;
    original_title:string;
    title:string;
    backdrop_path:string;
    poster_path:string;
    overview:string;
    name?:string;
}

const useTvshowlist=()=>{
    const [tvshows,setTvshows]=useState<TvshowResult[]>();

const fetchTvshowlist=async ()=>{
try{
const res =await apiClient.get("/discover/tv");
setTvshows(res.data.results)
// console.log(res)
}
catch(error){

}
}
useEffect(()=>{
    fetchTvshowlist()
},[])
return{tvshows}
}
export default useTvshowlist;