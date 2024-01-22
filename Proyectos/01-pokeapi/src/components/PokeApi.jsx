import { useEffect, useState } from "react";
import pokeApi from "../api/pokeApi";
import Card from "./Card";
import Spinner from "./Spinner";
const URL = import.meta.env.VITE_API_URL;
const PokeApi = () => {
  // hooks
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleDelete(id) {
    const updatePokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatePokemons);
  }

  // effects
  useEffect(() => {
    const fetchData = async () => {
      const data = await pokeApi(URL);
      console.log(data);
      // ahora voy a crear una variable que contenga
      // la información de que necesito de todos los pokemons
      // será una promesa que consumiré cuando todas las promesas
      // hayan sido resueltas.
      const pokemonsData = await Promise.all(
        data.map(async (pokemon) => {
          const resp = await fetch(pokemon.url);
          const pokemonDetails = await resp.json();
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image:
              pokemonDetails.sprites.other.dream_world.front_default ||
              pokemonDetails.sprites.front_default ||
              "",
            media: pokemonDetails.weight,
          };
        })
      );
      setPokemons(pokemonsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {loading ? (
        <Spinner />
      ) : (
        pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default PokeApi;
