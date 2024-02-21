import { useReducer } from "react";

const initialState = {
  name: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET-NAME":
      return { ...state, name: action.payload };
    case "SET-PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const FormUserPassword = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChangeName = (e) => {
    dispatch({ type: "SET-NAME", payload: e.target.value });
  };

  const handleChangePassword = (e) => {
    dispatch({ type: "SET-PASSWORD", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Aquí mostraré los datos capturados del formulario Nombre: ${state.name} Password: ${state.password} `
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto pt-8 bg-gray-100 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={handleChangeName}
          className="w-full px-4 py-2 rounded-md border-gray-400"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={handleChangePassword}
          className="w-full px-4 py-2 rounded-md border-gray-400"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormUserPassword;
