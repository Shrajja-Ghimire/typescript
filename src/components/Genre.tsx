import { GenreContext } from "@/context/genrecontext"
import { useContext} from "react"
import { useNavigate } from "react-router"

const genrelist= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
const Genre = () => {
  const {genres,setGenres} =useContext(GenreContext);
  // const [genresname,setGenresname]=
  console.log(genres)
  const navigate=useNavigate();
  
  
  const handleClick=(id:number)=>{
    setGenres(id);
navigate("\movies");
  }
  return (
   <div className="dropdown">
  <div tabIndex={0} role="button" className="cursor-pointer">{genres? genres:"Genres"}</div>
  <ul tabIndex={0}  className="dropdown-content menu bg-base-100 "   >
    {genrelist.map((genre)=>(
    <li key={genre.id}>
        <button onClick={() => handleClick(genre.id)}>
          {genre.name}
        </button>
    </li>
    ))
    }
  </ul>
</div>
  )
}

export default Genre;
