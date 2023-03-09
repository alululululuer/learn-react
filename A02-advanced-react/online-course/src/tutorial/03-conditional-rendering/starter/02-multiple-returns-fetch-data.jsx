import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
        //fetch不把404视为error👀
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <p>There maybe some error...</p>;
  }
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
