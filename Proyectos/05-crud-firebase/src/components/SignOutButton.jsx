import { useAuthContext } from "../context/useAuthContext";
import { cerrarSesion } from "../firebase/productosApi";

const SignOutButton = () => {
  const { signOutFirebase } = useAuthContext();

  const handleSignOut = async () => {
    // tendrá que llamar a una función de firebase para cerrar la sesión.
    try {
      const hasCerrado = await cerrarSesion();
      if (hasCerrado) {
        signOutFirebase();
      } else {
        throw new Error("No se puede cerrar la sesión");
      }
    } catch (error) {
      console.log("Error sesion", error);
    }
  };
  return (
    <button
      onClick={handleSignOut}
      className=" bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md"
    >
      Cerrar Sesión
    </button>
  );
};

export default SignOutButton;
