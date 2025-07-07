import type { MovieResult } from "@/hooks/useMovies"

interface Props{
movieResult: MovieResult
}
const Moviecard = ({movieResult} :Props) => {
  return (
   
    <div className="overflow-hidden shadow-md bg-white ">
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
