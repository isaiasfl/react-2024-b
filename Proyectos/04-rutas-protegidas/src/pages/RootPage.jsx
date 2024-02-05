import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-gray-500 to-purple-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
