import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
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
export const getProductById = async (productId) => {
  try {
    const productDocRef = doc(productosCollection, productId);
    const productDoc = await getDoc(productDocRef);
    console.log("ProductDocRef -->", productDocRef);
    console.log("productDoc-->", productDoc);
    if (productDoc.exists()) {
      return { ...productDoc.data(), id: productDoc.id };
    } else {
      console.error("Producto no encontrado");
      return null;
      // o un throw error
    }
  } catch (error) {
    console.log("Error al obtener el producto", error);
    throw error;
  }
};

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

export const editProduct = async (id, newData) => {
  try {
    // crear una referencia al documento donde está esa iD
    const productDocRef = doc(productosCollection, id);
    // actualizamos.
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.log("Error updating product", error);
    throw error;
  }
};

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

// --- Validar la entrada con Google.

export const signInWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    // Tipo de persistencia que tenemos con la sesión de google.
    // a nivel Local, a niver de session y sin persistencia. browserLocalPersistence
    // a nivel de session :
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // setear mi estado con el usuario
    // signInFirebase(user);
    console.log(user);
    navigate("/");
  } catch (error) {
    setError("Error al iniciar sesión con Google");
  }
};
