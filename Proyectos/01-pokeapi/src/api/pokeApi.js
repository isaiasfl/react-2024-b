// llamada a la api de pokeapi.co 

const pokeApi = async (urlApi) => {
  try {
    const response = await fetch(urlApi);
    if(!response.ok) {
      throw new Error("Error fetching");
    }
    const data= await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    // throw new Error("Error fetching");
  }
}

export default pokeApi