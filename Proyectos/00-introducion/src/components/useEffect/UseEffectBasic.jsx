import React, { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [counter, setCounter] = useState(0);

  console.log("hola desde el inicio");

  // useEffect(() => {
  //   console.log("Hola desde el UseEffect");
  // });
  // cuando creo un useEffect sin el array de dependencias
  // entonces se ejeturá cada vez que cambio cualquier estado.

  // useEffect(() => {
  //   console.log("Hola desde el UseEffect");
  // }, []); // array de dependencias vacío.
  // ejecuta lo que hay dentro sólo
  // cuando se monta por primera vez un componente

  // useEffect(() => {
  //   console.log("Hola desde el UseEffect");
  // }, [counter]);

useEffect(() => {
  console.log("hola desde UseEffect con return ")

  return () => {
    // Cuando se desmonte el componente se ejecutará
    // lo que hay en el return .
  }
}, [])



  function handleIncrementCounter(value = 1) {
    // setCounter((prev) => prev + 1);
    setCounter(counter + value);
  }

  return (
    <>
      <h1>Ejemplo básico de contador</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrementCounter(5)}>Incrementar</button>
    </>
  );
};

export default UseEffectBasic;
