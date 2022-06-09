import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Error } from "../../components/Error";
import { InputStringRegister } from "../../components/InputStringRegister";
import { InputTextArea } from "../../components/InputTextArea";
import { Loading, sendFormMessage } from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { createUserService } from "../../services";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const messageValidate = await createUserService({
        name,
        email,
        password,
        bio,
      });
      setLoading(false);
      setInfoMessage(messageValidate);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setInfoMessage("");
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : loading ? (
    <Loading message={sendFormMessage} />
  ) : infoMessage ? (
    <div>
      <p>{infoMessage}</p>
    </div>
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
        {error ? <Error message={error} /> : null}
      </form>
    </section>
  );
};
