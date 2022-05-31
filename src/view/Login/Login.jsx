import { useContext, useEffect, useState } from "react";
// import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logInUserService } from "../../services/index";

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

      setUser(userDataPublic);

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const noReLogin = async () => {
      try {
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    if (user) noReLogin();
  });

  return user ? null : (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </fieldset>

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
