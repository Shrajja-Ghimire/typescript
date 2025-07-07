import apiClient from "@/services/api-client"
import { useEffect, useState } from "react";
export interface MovieResult{
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
const useMovieList=(genres?:number|null)=>{
const [movielist, setMovielist]=useState<MovieResult[]>()

const fetchMovieList=async()=>{
    try{
 const res= await apiClient.get("/discover/movie",{
    params:{
        with_genres:genres,
    }

 });
 setMovielist(res.data.results);
//  console.log(res.data.results);
    }
    catch(error){

    }

};
useEffect(()=>{
    fetchMovieList();
},[genres]);
return{movielist};
};

export default useMovieList;
