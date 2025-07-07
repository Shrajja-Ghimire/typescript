import useTvshowlist from "@/hooks/useTVshows"
import TvshowsCard from "./TvshowsCard";

const Tvshows = () => {
 const {tvshows} =useTvshowlist();
//  console.log(tvshows);
  return (
    <div className="p-3 mb-4">
  <h1 className="text-2xl px-3 font-semibold">Tvshows</h1>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-6">
   {tvshows?.map((show)=>(
<div key={show.id} className="transition-transform duration-300 hover:scale-95">
      <TvshowsCard tvshowResult={show} />
    </div>
   ))}
</div>
</div>
  )
}

export default Tvshows
