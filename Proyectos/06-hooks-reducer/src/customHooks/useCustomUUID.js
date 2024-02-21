import { useState } from "react";

/**
 * Custom que : me genera un UUID formado por:
 * date.now()-aleatorio-aleatorio-aleatorio
 *
 */
const useCustomUUID = () => {
  function generarUID() {
    const timeMili = Date.now();
    const random1 = Math.random().toString(36).substring(2);
    const random2 = Math.random().toString(36).substring(2);
    const random3 = Math.random().toString(36).substring(2);
    return `${timeMili}-${random1}-${random2}-${random3}`;
  }

  // const [uuid, setUUID] = useState(()=> {
  //   const timeMili = Date.now();
  //   const random1 = Math.random().toString(36).substring(2);
  //   const random2 = Math.random().toString(36).substring(2);
  //   const random3 = Math.random().toString(36).substring(2);
  //   return `${timeMili}-${random1}-${random2}-${random3}`
  // });
  const [uuid, setUUID] = useState(generarUID());
  const setResetUID = () => {
    setUUID(generarUID());
  };

  return [uuid, () => setUUID(generarUID)];
  //return [uuid, setResetUID];
};

export default useCustomUUID;
