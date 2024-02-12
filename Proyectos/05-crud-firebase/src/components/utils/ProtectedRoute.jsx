import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath }) => {
  // cargamos el estado global. 
  const isActive = !!estadoGlobal
  if (!isActive) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
