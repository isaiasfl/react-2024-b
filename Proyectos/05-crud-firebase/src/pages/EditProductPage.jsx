import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProducForm from "../components/EditProducForm";
import { getProductById } from "../firebase/productosApi";

const EditProductPage = () => {
  const { idproduct } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // realizamos una consulta a FireBase para traerme el
    // documento cuyo id es idproduct
    const fetchProduct = async () => {
      try {
        // la función que tenga en productosApi.js
        const productData = await getProductById(idproduct);
        if (productData) {
          setProducto(productData);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    if (idproduct) {
      fetchProduct();
    } else {
      navigate("/");
    }
  }, [idproduct, navigate]);

  return (
    <div className="w-5/6 mx-auto mt-10">
      {/* Realizamos un cortocircuito para  obligar que sólo cuando tenga los datos
         de la promesa (producto) puedo renderizar el componente EditProductForm
      */}
      {producto && <EditProducForm initialData={producto} />}
    </div>
  );
};

export default EditProductPage;
