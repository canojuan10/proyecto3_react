import { useContext, useState } from "react";
import { logInUserService } from "../../services";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { InputStringRegister } from "../../components/InputStringRegister";
import { Link } from "react-router-dom";
import { Loading, loginMessage } from "../../components/Loading";
import { Error } from "../../components/Error";
export const Login = () => {
  const navigate = useNavigate();
  const { login, setUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token, userDataPublic } = await logInUserService({
        email,
        password,
      });
      const bearerToken = `Bearer ${token}`;
      setUser(userDataPublic);

      login(bearerToken);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : loading ? (
    <Loading message={loginMessage} />
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

        <Link to={"/user/recoverypassword"}>¿No recuerdas tu contraseña?</Link>
        {error ? <Error message={error} /> : null}
      </form>
    </section>
  );
};
