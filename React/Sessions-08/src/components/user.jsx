import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");
  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  const { name, dob, email, picture } = user;

  return (
    <div>
      <h1>
        {/* ⬇(name?.first(name?.last))⬇ Optinal chaining name varsa name.first de eriş ve name var ise name.lasta eriş */}
        {name?.first}
        {name?.last}
      </h1>
      <img src="" alt="" />
      <p>E-mail</p>
      <h5>DOB</h5>
      <button className="btn btn-warning" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};
export default User;
