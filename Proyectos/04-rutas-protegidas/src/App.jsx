import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RootPage from "./pages/RootPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={false} redirectPath="/login" />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
          ],
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
