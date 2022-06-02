import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { InputStringRegister } from "../../components/InputStringRegister";
import { InputTextArea } from "../../components/InputTextArea";
import { AuthContext } from "../../context/AuthContext";
import { createUserService } from "../../services";

export const Register = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const messageValidate = await createUserService({
        name,
        email,
        password,
        bio,
      });
      setInfoMessage(messageValidate);
      setError("");
    } catch (error) {
      setError(error.message);
      setInfoMessage("");
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : (
    <section>
      <h1>Formulario Creación de usuario</h1>
      <form onSubmit={handleForm}>
        <InputStringRegister
          value={name}
          setValue={setName}
          inputType="text"
          name="name"
          label="Nombre de usuario: "
        />
        <InputStringRegister
          value={password}
          setValue={setPassword}
          inputType="password"
          name="password"
          label="Password: "
        />
        <InputStringRegister
          value={email}
          setValue={setEmail}
          inputType="email"
          name="email"
          label="Email: "
        />
        <InputTextArea
          value={bio}
          setValue={setBio}
          name="bio"
          label="Biografía: "
        />

        <button>Crear usuario</button>
        {error ? <p>{error}</p> : null}
      </form>
      {infoMessage ? (
        <div>
          <p>{infoMessage}</p>
        </div>
      ) : null}
    </section>
  );
};
