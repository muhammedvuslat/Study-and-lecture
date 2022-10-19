import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault(); //!Onchange in her defasında rest yapmasını engellemek için kullanıldı
    console.log(e.target.value);
    alert(`
    username: ${username}
    email: ${email}
    password:${password}`);

    setFormValues({
      username: "",
      email: "",
      password: "",
    });
  };
  const handleForm = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">Form Object</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name: <span className="text-success">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleForm}
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
          onChange={handleForm} //! onChange inline fonk.
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pasword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
