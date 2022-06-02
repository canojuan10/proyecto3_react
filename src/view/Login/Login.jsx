import { useContext, useState } from "react";
import { logInUserService } from "../../services";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { InputStringRegister } from "../../components/InputStringRegister";

export const Login = () => {
  const navigate = useNavigate();
  const { login, setUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const { token, userDataPublic } = await logInUserService({
        email,
        password,
      });
      const bearerToken = `Bearer ${token}`;
      setUser(userDataPublic);

      login(bearerToken);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <InputStringRegister
          value={email}
          setValue={setEmail}
          inputType="email"
          name="email"
          label="Email"
        />
        <InputStringRegister
          value={password}
          setValue={setPassword}
          inputType="password"
          name="pass"
          label="Password"
        />

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
