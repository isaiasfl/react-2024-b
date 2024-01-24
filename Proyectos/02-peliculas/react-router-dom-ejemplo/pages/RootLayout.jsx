import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavNavitation from "../components/NavNavitation";

const RootLayout = () => {
  return (
    <>
      {/* Barra de navigation */}
      <NavNavitation />
      {/* Aquí vendrían todos los hijos */}
      {/* Aquí vendría un footer */}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
