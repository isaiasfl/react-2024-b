import { useState } from "react";
import useDataApi from "../hooks/useDataApi";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const MovieSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiEndPoint =
    "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
    apiToken;
  const { data, error, loading } = useDataApi(apiEndPoint);

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(e.target.value.toLowerCase());
    if (e.target.value.toLowerCase().trim() === "") {
      setFilteredMovie([]);
    } else {
      const filteredResults = data?.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovie(filteredResults || []);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
          placeholder="Buscar Películas"
        />
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
        {loading && <Spinner />}
        {error && (
          <p className="text-2xl font-bold">Error accediendo a MovieDB</p>
        )}
        {(searchQuery ? filteredMovie : data?.results || []).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchForm;
