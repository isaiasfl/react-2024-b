import { useState } from "react";

const initialState = ["manzana", "pera", "naranja", "platano", "melón", "uva"];
const Buscador = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterdItems, setFilterdItems] = useState(initialState);
  return {
    /** 
    formulario para buscar
    ul los elementos del initial state
    cada vez que escriba en el formulario realizaremos la búsqueda.
  */
  };
};

export default Buscador;
