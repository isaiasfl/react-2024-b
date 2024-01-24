import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import RootMoviesLayout from "./pages/RootMoviesLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMoviesLayout />,
      errorElement: <Error />,

      children: [
        { index: true, element: <Home /> },
        // { path: "peliculas", element: <Usuarios /> },
        { path: "peliculas/:idPelicula", element: <MovieDetailsPage /> },
      ],
    },
    // { path: "/admin", element: <Admin /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
