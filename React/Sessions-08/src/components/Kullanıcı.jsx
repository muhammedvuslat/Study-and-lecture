import React, { useEffect, useState } from "react";

const Kullanıcı = () => {
  const [kullanıcı, setKullanıcı] = useState("");

  const getirKullanıcı = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setKullanıcı(data.results[0]));
  };
  useEffect(() => {
    getirKullanıcı();
  }, []);

  const { name, dob, picture } = kullanıcı;

  return (
    <div>
      <h1>
        {name?.first} {name?.last}
      </h1>
      <h2>{dob?.age}</h2>
      <img className="rounded-circle" src={picture?.large} alt="#" />
      <br />
      <button className="btn btn-warning mt-4 " onClick={getirKullanıcı}>
        {" "}
        Get{" "}
      </button>
    </div>
  );
};

export default Kullanıcı;
