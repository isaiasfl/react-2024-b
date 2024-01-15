// import

import { useState } from "react";

// Variables Globales.

const Contador = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter(value = 1) {
    // setCounter((prev) => prev + 1);
    setCounter(counter + value);
  }

  function handleDecrementCounter() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Ejemplo básico de contador</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrementCounter(5)}>Incrementar</button>

      <button onClick={handleDecrementCounter}>Decrementar</button>
    </>
  );
};

export default Contador;
