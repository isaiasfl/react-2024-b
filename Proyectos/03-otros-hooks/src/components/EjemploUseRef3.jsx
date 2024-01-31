import { useEffect, useRef, useState } from "react";

const EjemploUseRef3 = () => {
  const [contador, setContador] = useState(0);
  const botonRef = useRef();
  useEffect(() => {
    alert(`Contador: ${contador}`);
    botonRef.current.style.backgroundColor = "red";
  }, [contador]);

  function handleClick() {
    setContador((prev) => prev + 1);
    setTimeout(() => {
      // botonRef.current.style.backgroundColor = "red";
    }, 2000);
  }
  return (
    <div>
      <p>Contador : {contador}</p>
      <button ref={botonRef} onClick={handleClick}>
        Pulsar{" "}
      </button>
    </div>
  );
};

export default EjemploUseRef3;
