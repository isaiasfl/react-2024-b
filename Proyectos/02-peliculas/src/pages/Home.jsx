import { useState } from "react";
import useDataApi from "../hooks/useDataApi";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiEndPoint =
    "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
    apiToken;
  const { data, error, loading } = useDataApi(apiEndPoint);
 
 function handleSearch(e) {
  e.preventDefault();
  setSearchQuery(e.target.value.toLowerCase().trim())
  if(e.target.value.toLowerCase().trim() === ""){
    setFilteredMovie([]);
  } else {
    const filteredResults = data?.results.filter(()=>)
  }
  
 }
 
 
 
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form  className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center">
        <input 
          type="text" 
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="Buscar Películas"
          />

      </form>
    </div>


  );
};

export default Home;
