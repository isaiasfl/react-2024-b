const Basico = () => {
  // Variables Locales.
  const nombre = "Isaías ";
  const nCalle = 56;
  const miArray = ["Manzana", "Banana", "Naranja"];
  const miObjeto = { nombre: "Juan", edad: 25 };
  const elementoJSX = <p> El mundo es maravillo</p>;

  // declaración de los HOOKS

  // funciones
  function sumar(n1, n2) {
    return n1 + n2;
  }

  return (
    // aquello que quiero renderizar (JSX)
    // Siempre que queramos usar javascript hay que englobarlo en {}
    <>
      <div>Tu nombre es {nombre}</div>
      <p>El número de calle es {nCalle}</p>
      <p>Sumo los números 5+7 = {sumar(5, 7)}</p>
      <p>True -- {false.toString()}</p>
      <ul>
        {miArray.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
      {elementoJSX}
      <div>
        <p>Nombre: {miObjeto.nombre}</p>
        <p>Edad: {miObjeto.edad}</p>
      </div>
      {elementoJSX}
    </>
  );
};

export default Basico;
