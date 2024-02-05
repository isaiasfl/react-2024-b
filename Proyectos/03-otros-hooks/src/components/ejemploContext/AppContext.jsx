import Componente1 from "./components/Componente1";
import Componente4 from "./components/Componente4";
import AppProvider from "./context/AppProvider";

const AppContext = () => {
  return (
    <>
      <div>AppContext</div>
      <AppProvider>
        <Componente1 />
        <Componente4 />
      </AppProvider>
    </>
  );
};

export default AppContext;
