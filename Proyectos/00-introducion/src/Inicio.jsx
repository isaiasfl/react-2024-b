import "./Inicio.css";
import ComponenteProps from "./components/props/ComponenteProps";
import PadreHijoNieto from "./components/props/PadreHijoNieto";
import GitHubUserCard from "./components/useEffect/GitHubUserCard/GitHubUserCard";
import ResizeListener from "./components/useEffect/ResizeListener";
import UseEffectBasic from "./components/useEffect/UseEffectBasic";
import Contador from "./components/useState/Contador";
import ContadorDoble from "./components/useState/ContadorDoble";
import ContadorDobleBest from "./components/useState/ContadorDobleBest";
import DarkLightMode from "./components/useState/DarkLightMode";
import TodoListBasicTailWindCss from "./components/useState/TodoListBasicTailWindCss";
import TodoListVeryBasic from "./components/useState/TodoListVeryBasic";

const Inicio = () => {
  return (
    <>
      {/* <Contador />
      <hr />
      <ContadorDoble />
      <hr />
      <ContadorDobleBest />
      <hr />
      <DarkLightMode />
      <hr />
      <TodoListVeryBasic /> */}
      {/* <RegistrarFormulario /> */}
      {/* <hr />
      <TodoListBasicTailWindCss /> */}
      <hr />
      {/* <ComponenteProps /> */}
      <hr />
      {/* <PadreHijoNieto /> */}
      {/* <UseEffectBasic /> */}
      {/* <ResizeListener /> */}
      <GitHubUserCard />
    </>
  );
};

export default Inicio;
