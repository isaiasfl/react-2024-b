import useCounter from "./customHooks/useCounter";
import useCustomUUID from "./customHooks/useCustomUUID";
import useLocalStorage from "./customHooks/useLocalStorage";
import BasicoReducer from "./useReducer/BasicoReducer";
import FormUserPassword from "./useReducer/FormUserPassword";

function App() {
  const { myCount, increment, decrement, reset } = useCounter(); // CUSTON HOOK COUNTER
  const [aaaa, generarUUID] = useCustomUUID();
  const [storedValue, setValue] = useLocalStorage("keyIsaias", "I love React");

  return (
    <>
      <h1 className="text-4xl"> Custom Hooks y useReducer</h1>
      <hr />
      <BasicoReducer />
      <hr />
      <FormUserPassword />
      <hr />
      <h1 className="text-2xl"> Custom Hooks </h1>
      <hr />
      <h2 className="text-xl">Generar UID</h2>
      <div>
        <p className="text-lg font-bold">UUDI: {aaaa}</p>
        <button
          onClick={generarUUID}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Genererar nuevo UUID
        </button>
      </div>
      <hr />
      <h2 className="text-xl">Almacenar en el LocalStorage</h2>
      <div className="container mx-auto p4">
        <p className="text-2xl font-bold">
          Valor almacenado en la clave keyIsaias es: {storedValue}
        </p>
        <div>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={storedValue}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
