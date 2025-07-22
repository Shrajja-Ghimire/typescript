// import { createContext, useState } from "react";

// export const SearchResultContext= createContext({});
// export const SearchProvider=({children}:{children:React.ReactNode})=>{
//     const [searchText,setSearchText]=useState(" ");
//     const [searchData,setSearchData]=useState();
//     const value={searchText,searchData,setSearchData,setSearchText};

//     // <SearchResultContext.Provider value={value}>{children}</SearchResultContext.Provider>
// }
import { createContext, useState } from "react";

// Define the shape of your context
interface SearchContextType {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchData: any;
  setSearchData: React.Dispatch<React.SetStateAction<any>>;
}

// Create context with default (optional)
export const SearchResultContext = createContext<SearchContextType>({
  searchText: "",
  setSearchText: () => {},
  searchData: null,
  setSearchData: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState(" ");
  const [searchData, setSearchData] = useState<any>(null);

  const value = { searchText, setSearchText, searchData, setSearchData };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};
