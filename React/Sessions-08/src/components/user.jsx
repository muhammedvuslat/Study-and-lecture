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
        {/* ⬇(name?.first(name?.last))⬇ Optinal chaining name varsa name.first de eriş ve name var ise name.lasta eriş zincirleme olarak devam edebilir name?.first?.xxxx  */}
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>{email}</p>
      <h5>{new Date(dob?.date).toLocaleDateString()}</h5>
      <button className="btn btn-warning" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};
export default User;
