import { useState } from "react";

const Nieto = (props) => {
  const { counter, handleIncrementCounter, handleDecrementCounter } = props;

  return (
    <div className=" bg-gray-400 p-8 rounded-md text-center ">
      <p className="text-2xl font-bold mb-6">Contador Padre : {counter} </p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3
        "
        onClick={() => handleIncrementCounter(1)}
      >
        Incrementar
      </button>

      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3"
        onClick={handleDecrementCounter}
      >
        Decrementar
      </button>
    </div>
  );
};

const Hijo = (props) => {
  const { counter, handleIncrementCounter, handleDecrementCounter } = props;

  return (
    <div className=" bg-gray-400 p-8 rounded-md text-center ">
      <p className="text-2xl font-bold mb-6">Contador Padre : {counter} </p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3
        "
        onClick={() => handleIncrementCounter(1)}
      >
        Incrementar
      </button>

      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3"
        onClick={handleDecrementCounter}
      >
        Decrementar
      </button>
      <Nieto
        counter={counter}
        handleIncrementCounter={() => handleIncrementCounter(2)}
        handleDecrementCounter={handleDecrementCounter}
      />
    </div>
  );
};

const PadreHijoNieto = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter(value = 1) {
    // setCounter((prev) => prev + 1);
    setCounter(counter + value);
  }

  function handleDecrementCounter() {
    setCounter(counter - 1);
  }
  return (
    <div className=" bg-gray-400 p-8 rounded-md text-center ">
      <p className="text-2xl font-bold mb-6">Contador Padre : {counter} </p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3
        "
        onClick={() => handleIncrementCounter(1)}
      >
        Incrementar
      </button>

      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md
        hover:bg-green-800 mx-3"
        onClick={handleDecrementCounter}
      >
        Decrementar
      </button>
      <Hijo
        counter={counter}
        handleIncrementCounter={() => handleIncrementCounter(10)}
        handleDecrementCounter={handleDecrementCounter}
      />
    </div>
  );
};

export default PadreHijoNieto;
