import { useEffect, useState } from "react";

const Kull = () => {
  const [kull, setKull] = useState("");

  const getKull = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setKull(data.results[0]));
  };

  useEffect(() => {
    getKull();
  }, []);

  const { name, picture, email } = kull;

  return (
    <div>
      <h1>
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="#" />
      <h3> {email}</h3>
      <button className="btn btn-info mt-3 fs-4 " onClick={getKull}>
        {" "}
        Get User
      </button>
    </div>
  );
};

export default Kull;
