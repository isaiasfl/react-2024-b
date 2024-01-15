import { useState } from "react";
const initialState = {
  isaias: 0,
  ana: 0,
};
const ContadorDobleBest = () => {
  const [friends, setFriends] = useState(initialState);

  function handleIncrementFriends(friendName) {
    setFriends((prevFriends) => ({
      ...friends,
      [friendName]: prevFriends[friendName] + 1,
    }));
  }

  return (
    <>
      <div>
        <span>
          Isaías tiene <strong>{friends.isaias}</strong> amigos
        </span>
        <button onClick={() => handleIncrementFriends("isaias")}>
          Aumentar +1 amigos
        </button>
      </div>
      <div>
        <span>
          Ana tiene <strong>{friends.ana}</strong> amigos
        </span>
        <button onClick={() => handleIncrementFriends("ana")}>
          Aumentar +1 amigos
        </button>
      </div>
    </>
  );
};

export default ContadorDobleBest;
