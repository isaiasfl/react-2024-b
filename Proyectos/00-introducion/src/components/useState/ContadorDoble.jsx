import { useState } from "react";
const initialState = {
  isaias: 0,
  ana: 0,
};
const ContadorDoble = () => {
  // hooks
  const [friends, setFriends] = useState(initialState);

  // funciones
  function handleIncrementIsaias() {
    // incrementar en 1 el número de amigos de Isaías.
    setFriends({
      ...friends,
      isaias: friends.isaias + 1,
    });
  }
  function handleIncrementAna() {
    // incrementar en 1 el número de amigos de Isaías.
    setFriends({
      ...friends,
      ana: friends.ana + 1,
    });
  }
  return (
    <>
      <div>
        <span>
          Isaías tiene <strong>{friends.isaias}</strong> amigos
        </span>
        <button onClick={handleIncrementIsaias}>Aumentar +1 amigos</button>
      </div>
      <div>
        <span>
          Ana tiene <strong>{friends.ana}</strong> amigos
        </span>
        <button onClick={handleIncrementAna}>Aumentar +1 amigos</button>
      </div>
    </>
  );
};

export default ContadorDoble;
