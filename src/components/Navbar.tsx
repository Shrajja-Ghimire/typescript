import { Link,NavLink,useNavigate } from "react-router";
import logo from "../assets/logo.png";
import Genre from "./Genre";
import { useContext} from "react";
import { SearchResultContext } from "@/context/searchcontext";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

 const navigate = useNavigate();
const {searchText,setSearchText}=useContext(SearchResultContext);

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setSearchText(e.target.value);
navigate(`/search/${e.target.value}`)
if(e.target.value === " "){
navigate("/movies");
}
// console.log(searchText)
}

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
navigate(`/search/${searchText}`)

}
  return (
  <div className="p-3">
   <div className=" flex justify-between items-center gap-20">
    <NavLink to="/">
  <img 
    src={logo}
    alt="logo"
    className="h-12 md:h-14 object-contain cursor-pointer"
    onClick={() => navigate("/")}
  />
  </NavLink>
  <form onSubmit={handleSubmit} className="py-3 w-full">
  <div className="relative w-full md:w-200">
    <input
      type="text"
      placeholder="Search..."
      className="w-full border border-blue-300 px-4 py-3 pr-10 rounded-full shadow-lg outline-none "
      value={searchText}
      onChange={handleChange}
    />
    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
  </div>
</form>

</div>

    <div className="flex justify-around items-center text-bold text-2xl">
      <Genre/>
      <Link to="/movies" className="hover:text-indigo-900">Movies</Link>
      <Link to="/tvshows" className="hover:text-indigo-900">TV Shows</Link>
    </div>
 
</div>

  )
}

export default Navbar
