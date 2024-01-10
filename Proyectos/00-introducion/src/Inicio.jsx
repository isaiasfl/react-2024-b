import "./Inicio.css";
import Contador from "./components/Contador";
import ContadorDoble from "./components/ContadorDoble";
import ContadorDobleBest from "./components/ContadorDobleBest";
import DarkLightMode from "./components/DarkLightMode";
import RegistrarFormulario from "./components/RegistrarFormulario";
import TodoListBasicTailWindCss from "./components/TodoListBasicTailWindCss";
import TodoListVeryBasic from "./components/TodoListVeryBasic";

const Inicio = () => {
  return (
    <>
      <Contador />
      <hr />
      <ContadorDoble />
      <hr />
      <ContadorDobleBest />
      <hr />
      <DarkLightMode />
      <hr />
      <TodoListVeryBasic />
      {/* <RegistrarFormulario /> */}
      <hr />
      <TodoListBasicTailWindCss />
    </>
  );
};

export default Inicio;
