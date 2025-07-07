import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import Genre from "./Genre";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-2 md:px-4 py-2 bg-white ">
  <img src={logo} alt="logo" className="h-12 md:h-14 object-contain" />

  <div className="flex items-center gap-4">
    <input
      type="text"
      placeholder="Search..."
      className="rounded-full border border-gray-300 px-3 py-1 text-sm shadow-sm outline-none"
    />
    <div className="hidden md:flex gap-4 text-sm font-medium text-gray-700">
      <Genre/>
      <Link to="/movies" className="hover:text-indigo-600">Movies</Link>
      <Link to="/tvshows" className="hover:text-indigo-600">TV Shows</Link>
    </div>
  </div>
</div>

  )
}

export default Navbar
