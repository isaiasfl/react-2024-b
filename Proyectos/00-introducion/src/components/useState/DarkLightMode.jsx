import { useState } from "react";
import "./DarkLightMode.css";

const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    // <div class="clase1 clase2"></div>
    <div className={`default ${darkMode ? "dark" : "light"} `}>
      <h1>Cambio de Tema en React</h1>
      <button onClick={handleToggleTheme}>
        {darkMode ? "Modo claro" : "Modo oscuro"}
      </button>
      <button onClick={handleToggleTheme}>
        {darkMode ? "Modo claro" : "Modo oscuro"}
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla
        saepe aut earum, architecto porro nostrum tempora, provident corrupti
        laboriosam sed neque optio blanditiis natus molestiae alias expedita
        commodi quidem!
      </p>
    </div>
  );
};

export default DarkLightMode;
