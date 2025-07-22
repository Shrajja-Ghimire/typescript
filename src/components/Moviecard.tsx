import type { MovieResult } from "@/hooks/useMovies"
import { useNavigate } from "react-router";

interface Props{
movieResult: MovieResult
}
const Moviecard = ({movieResult} :Props) => {
const navigate=useNavigate();

  return (
   
    <div className="overflow-hidden shadow-md bg-white " onClick={()=>{navigate(`/player/movie/${movieResult.id}`)}}>
    <img
      src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
      alt="Poster"
      className="w-full h-70 object-cover"
    />
    {/* Optional overlay */}
   
      <h1 className="font-semibold truncate">
        {movieResult.title? movieResult.title : movieResult.name}
      </h1>
  </div>


  )
}

export default Moviecard
