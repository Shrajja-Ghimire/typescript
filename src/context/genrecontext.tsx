import { createContext, useState } from "react";

export const GenreContext=createContext<{ genres:number|null; setGenres:(data:number)=>void;}>
({genres:null,setGenres:()=>{}
});

export const GenreProvider=({children}:{children:React.ReactNode})=>{
    const [genres,setGenres]=useState<number | null>(null);
const value={genres,setGenres};
    return <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
}
// type GenreType = {
//   id: number;
//   name: string;
// };

// type GenreContextType = {
//   genres: GenreType | null;
//   setGenres: React.Dispatch<React.SetStateAction<GenreType | null>>;
// };

// export const GenreContext = createContext<GenreContextType>({
//   genres: null,
//   setGenres: () => {},
// });

// export const GenreProvider = ({ children }: { children: React.ReactNode }) => {
//   const [genres, setGenres] = useState<GenreType | null>(null);
//   return (
//     <GenreContext.Provider value={{ genres, setGenres }}>
//       {children}
//     </GenreContext.Provider>
//   );
// };
