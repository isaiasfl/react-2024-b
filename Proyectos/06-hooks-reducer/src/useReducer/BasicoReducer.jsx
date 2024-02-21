import { useReducer } from "react";

const initialState = { edad: 10 };
function edadReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { edad: state.edad + 1 };
    case "DECREMENT":
      if (state.edad === 0) return { edad: state.edad };
      return { edad: state.edad - 1 };
    case "RESET":
      throw new Error("Estoy en el Reset");
    default:
      return initialState;
  }
}

const BasicoReducer = () => {
  const [state, dispatch] = useReducer(edadReducer, initialState);

  /**
   *  initialState --> Estado inicial
   *  reducer --> función que define como el state pasa de un estado a otro 
   *          Se pasa dos parámetros state y action
   *  state --> Estado actual o estado más actualizado.
   *  dispatch --> Función para activar la actualización del estado.
    a) type 
    b) payload (Opcional)
   *
   */

  return (
    <div className="container mx-auto py-8 text-center">
      <div className="text-2xl font-bold">Básico de UseReducer</div>
      <p className="text-xl mb-4">Tu edad es: {state.edad} </p>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Incrementar Edad
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrementar Edad
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BasicoReducer;
