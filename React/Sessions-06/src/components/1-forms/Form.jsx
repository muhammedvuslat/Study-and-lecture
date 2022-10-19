import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    // e.preventDefault(); Onchange in her defasında rest yapmasını engellemek için kullanıldı
    console.log(e.target);
    alert(`
    username: ${username}
    email: ${email}
    password:${password}`);
  };
  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  return (
    <form onSubmit={handleSumbit}>
      <h1 className="displays-5 text-danger">FORM</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name: <span className="text-success">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-success">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} //! onChange inline fonk.
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pasword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
