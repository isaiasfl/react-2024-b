import { Outlet } from "react-router-dom";

const RootMoviesLayout = () => {
  return (
    <>
      <div>aquí coloco el NAV</div>
      <Outlet />
      <div>aquí Footer</div>
    </>
  );
};

export default RootMoviesLayout;
