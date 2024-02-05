import { useContext } from "react";
import AppCont from "../context/AppCont";
import Componente2 from "./Componente2";
const Componente1 = () => {
  const { appState, setAppState } = useContext(AppCont);

  return (
    <>
      <div>Componente1</div>
      <p>En el componente 1 el Count: {appState.count}</p>
      <button
        onClick={() => setAppState({ ...appState, count: appState.count + 1 })}
      >
        Incrementar
      </button>
      <Componente2 />
    </>
  );
};

export default Componente1;
