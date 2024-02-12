import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editProduct } from "../firebase/productosApi";

const EditProducForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // actualizar los datos.
      await editProduct(initialData.id, formData);
      Swal.fire({
        icon: "success",
        title: "¡Actualización Correcta!",
        text: "Datos actualizados correctamente",
      });
    } catch (error) {
      console.error("Error al editar el producto", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <label className="text-5xl mt-10 mb-8">Editar Producto</label>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded shadow-lg max-w-xl w-full mx-auto"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Nombre del producto:</span>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="block mt-2 w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Stock:</span>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="block mt-2 w-full"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Descripcion:</span>
          <textarea
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="block mt-2 w-full"
          ></textarea>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Url Imagen:</span>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="block mt-2 w-full"
          />
        </label>
        <div className="flex justify-between items-center">
          <button
            onClick={handleGoBack}
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Volver
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProducForm;
