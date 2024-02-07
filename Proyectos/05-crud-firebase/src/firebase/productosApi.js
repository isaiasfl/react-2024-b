import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

const productosCollection = collection(db, "crud-productos");

// ---------- Cargar productos ------------------

export const getProductos = async () => {
  try {
    const data = await getDocs(productosCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error getting productos", error);
    throw error;
  }
};

// ---------- Cargar un producto -------------

// ---------- Crear (ADD) entrada de productos ----------
export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(productosCollection, productoData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding producto", error);
    throw error;
  }
};

// ------------ Actualizar un producto ------------

// ---------- Eliminar entrada de productos ----------
export const deleteProducto = async (id) => {
  try {
    const productDocRef = doc(productosCollection, id);
    await deleteDoc(productDocRef);
  } catch (error) {
    console.log("Error deleting product", error);
    throw error;
  }
};
