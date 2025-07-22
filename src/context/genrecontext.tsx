import { createContext, useState } from "react";

export const GenreContext=createContext<{ genres:number|null; setGenres:(data:number)=>void;}>
({genres:null,setGenres:()=>{}
});

export const GenreProvider=({children}:{children:React.ReactNode})=>{
    const [genres,setGenres]=useState<number | null>(null);
const value={genres,setGenres};
    return <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
}
