import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./components/react-router-dom-ejemplo/Inicio";
import ErrorPage from "./components/react-router-dom-ejemplo/pages/ErrorPage";
import RootLayout from "./components/react-router-dom-ejemplo/pages/RootLayout";
import UsuariosDetails from "./components/react-router-dom-ejemplo/pages/UsuariosDetails";
import Usuarios from "./components/react-router-dom-ejemplo/Usuarios";

function App() {
  const router = createBrowserRouter([
    {
      path: "/datos",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Inicio /> },
        { path: "usuarios", element: <Usuarios /> },
        { path: "usuarios/:idUser", element: <UsuariosDetails /> },
      ],
    },
    // { path: "/admin", element: <Admin /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
