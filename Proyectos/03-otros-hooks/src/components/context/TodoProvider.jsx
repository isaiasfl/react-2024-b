import { useState } from "react";
import TodoContext from "./TodoContext";

const initialState = [
  {
    id: 1,
    nombre: "Sacar al perro",
    completada: false,
  },
  {
    id: 2,
    nombre: "Aprender React",
    completada: false,
  },
];

const TodoProvider = ({ children }) => {
  const [tareas, setTareas] = useState(initialState);
  function eliminarTarea() {}
  return (
    <TodoContext.Provider value={{ tareas, setTareas, eliminarTarea }}>
      <>{children}</>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
