import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProducto, getProductos } from "../firebase/productosApi";
import Spinner from "./Spinner";

const ShowProductsTable = ({ updateProductos }) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await Swal.fire({
        icon: "warning",
        title: "¿Estás seguro?",
        text: "¡La acción no se podrá revirtir!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      });

      if (response.isConfirmed) {
        await deleteProducto(id);
        updateProductos();
      }
    } catch (error) {
      Swal.fire({
        icon: "Error",
        title: "Ha ocurrido un error",
        text: "Error eliminando",
      });
    }
  };

  const fetchShowProducts = async () => {
    try {
      const productosData = await getProductos();
      setProductos(productosData);
    } catch (error) {
      console.error("Error fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowProducts();
  }, [updateProductos]);
  return (
    <div className="w-2/3 mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Lista de Productos</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre Producto</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Descripción</th>
                <th className="py-2 px-4 border-b">Imagen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b">
                  <td className="py-2 px-4">{producto.id}</td>
                  <td className="py-2 px-4">{producto.nombre}</td>
                  <td className="py-2 px-4">{producto.stock}</td>
                  <td className="py-2 px-4">{producto.descripcion}</td>
                  <td className="py-2 px-4">
                    <img
                      src={producto.url}
                      alt={producto.descripcion}
                      className="h-10 w-10 object-cover"
                    />
                  </td>
                  <td className="flex justify-between gap-2 py-2 px-4 ">
                    <Link to={`/productos/${producto.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded focus:outline-none hover:shadow hover:shadow-slate-500">
                        Editar
                      </button>
                    </Link>

                    <button
                      className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded focus:outline-none hover:shadow hover:shadow-slate-500"
                      onClick={() => handleDelete(producto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductsTable;
