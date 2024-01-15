import React, { useEffect, useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";

const GitHubUserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // traer la data la guardo en una variable llamada fetchData y por último la seeto
    // a mi estado con setUsers

    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (

    {loading ? (<Spinner/> ) : <>
    {users.map()}
    
    </>}


  );
};

export default GitHubUserCard;
