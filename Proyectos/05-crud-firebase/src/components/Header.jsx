import { useAuthContext } from "../context/useAuthContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { userFirebase } = useAuthContext();
  // const imgUrl = userFirebase?.photoURL
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="vite.svg" alt="Proyecto" className="w-8 h-8 mx-2" />
        <span className="text-2xl">CRUD de Productos en Firebase</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mx-10">
          <span>Bienvenido {userFirebase.displayName}</span>
          <p>{userFirebase.email}</p>
        </div>
        <img
          src={userFirebase.photoUrl}
          alt={userFirebase.displayName}
          className="w-12 mx-4 rounded-full"
        />
        {/* Aquí el botón de cerrar sesión */}
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
