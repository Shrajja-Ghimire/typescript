import useMovieList from "@/hooks/useMovies";
import Moviecard from "./Moviecard";
import { useContext } from "react";
import { GenreContext } from "@/context/genrecontext";

const Movielist = () => {
  const { genres } = useContext(GenreContext); // genre ID
  const { movielist } = useMovieList(genres); // fetch based on ID

  return (
    <div className="p-3 mb-4">
      <h1 className="text-2xl px-3 font-semibold">Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6">
        {movielist?.map((movie) => (
          <div key={movie.id} className="transition-transform duration-300 hover:scale-95">
            <Moviecard movieResult={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movielist;
