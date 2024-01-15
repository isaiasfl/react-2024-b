import React, { useEffect, useState } from "react";

const stateInitial = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const ResizeListener = () => {
  const [windowSize, setWindowSize] = useState(stateInitial);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // agrego un even listener para el evento de cambio de la ventana
    window.addEventListener("resize", handleResize);

    return () => {
      // elimino el evento listener para evitar la fuga de memora
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>
        El tamaño de la ventana es: {windowSize.width} x {windowSize.height}
      </p>
    </div>
  );
};

export default ResizeListener;
