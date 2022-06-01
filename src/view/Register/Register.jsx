import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createUserService } from "../../services";

export const Register = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const messageValidate = await createUserService({
        name,
        email,
        password,
        bio,
      });
      setMessage(messageValidate);
      setError("");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <section>
      <h1>Formulario Creación de usuario</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Nombre de usuario:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            minLength={3}
            maxLength={15}
            required
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Biografía:</label>
          <input
            type="textarea"
            id="bio"
            name="bio"
            balue={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>
        <button>Crear usuario</button>
        {error ? <p>{error}</p> : null}
      </form>
      {message ? (
        <div>
          <p>{message}</p>
        </div>
      ) : null}
    </section>
  );
};
