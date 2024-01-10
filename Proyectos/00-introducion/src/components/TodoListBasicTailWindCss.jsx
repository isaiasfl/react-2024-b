import React, { useState } from "react";
const initialState = [
  {
    id: 1,
    title: "Comprar Leche",
    completed: false,
  },
  {
    id: 2,
    title: "Comprar Agua",
    completed: true,
  },
  {
    id: 3,
    title: "Estudiar React",
    completed: false,
  },
];
const TodoListBasicTailWindCss = () => {
  const [tasks, setsTaks] = useState(initialState);
  const [newTask, setNewTask] = useState("");

  function handleChangeTask(e) {
    e.preventDefault();
    const value = e.target.value;
    setNewTask(value);
  }

  function handleAddTask() {}

  function handleRemoveTask() {}

  function handleCompletion() {}

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadown-md rounded-md">
        <h1 className="text-2xl mb-4 font-bold">Lista de Tareas</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Nueva Tarea"
            className="flex-1 mr-2 p2 border rounded-md 
        focus:outline-none focus: border-blue-600
        "
            value={newTask}
            // onChange={handleChangeTask}
            onChange={(e)=>setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-500
         text-white px-4 py-2 rounded-md
          hover:bg-blue-900"
            onClick={handleAddTask}
          >
            Agregar tarea
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={task.completed}
                className="mr-4"
                onChange={() => handleCompletion(task.id)}
              />
              <span className={task.completed ? "line-through" : "none"}>
                {task.title}
              </span>
              <button
                className="ml-auto
                bg-red-500
                text-white
                px-3 py-1 rounded-md hover:bg-red-800 
                "
                onClick={() => handleRemoveTask(task.id)}
              >
                Borrar Tarea
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListBasicTailWindCss;
