import { useContext } from "react";
import AppCont from "../context/AppCont";
const Componente4 = () => {
  const { appState, setAppState } = useContext(AppCont);
  return (
    <>
      <div>Componente4</div>
      <p>En el componente 4 el Count: {appState.count}</p>
    </>
  );
};

export default Componente4;
