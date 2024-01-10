import { useState } from "react";

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

const TodoListVeryBasic = () => {
  const [tasks, setsTaks] = useState(initialState);

  function handleCompletion(taskId) {
    const updateTask = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setsTaks(updateTask);
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompletion(task.id)}
            ></input>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListVeryBasic;
