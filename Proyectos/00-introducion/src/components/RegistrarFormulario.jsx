import React, { useState } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrarFormulario = () => {
  // hooks
  const [formData, setFormData] = useState(initialState);
  // funciones
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Los datos del usuario son: ", formData);
  }

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    //console.log("Name: ", name, "Value: ", value);
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Registrar Usuario</button>
    </form>
  );
};

export default RegistrarFormulario;
