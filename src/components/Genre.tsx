import { GenreContext } from "@/context/genrecontext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

const genrelist = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];

const Genre = () => {
  const { genres, setGenres } = useContext(GenreContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (genre) => {
    setGenres(genre.id);
    setIsOpen(false);
    navigate("/movies");
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="list-none px-4 py-2 cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        Genres
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
          {genrelist.map((genre) => (
            <div
              key={genre.id}
              className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleClick(genre)}
            >
              {genre.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Genre;
