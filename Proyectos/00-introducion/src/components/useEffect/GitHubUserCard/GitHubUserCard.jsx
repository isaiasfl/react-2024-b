import { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import CardGitHub from "./CardGitHub";
import Modal from "./Modal";
import Spinner from "./Spinner";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectUser, setSelectUser] = useState(null);

  const openModal = (avatarUrl) => {
    setSelectUser(avatarUrl);
  };

  const closeModal = () => {
    setSelectUser(null);
  };

  useEffect(() => {
    // traer la data la guardo en una variable llamada fetchData y por último la seeto
    // a mi estado con setUsers

    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const data = await fetchGitHubUsers();
          setUsers(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-auto text-center  max-w-[85%] relative">
      <h1 className="text-3xl font-mono font-bold my-8">
        {" "}
        Usando UseEffect para realizar un fetch de la Api GitHub
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto relative">
            {users.map((user) => (
              <CardGitHub
                key={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                html_url={user.html_url}
                openModal={openModal}
              />
            ))}
          </div>
          <Modal
            isOpen={!!selectUser}
            avatar_url={selectUser}
            onClose={closeModal}
          />
        </>
      )}
    </div>
  );
};

export default GitHubUserCard;
