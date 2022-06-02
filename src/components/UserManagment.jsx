import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UserManagment = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return user ? (
    <section>
      Logged in as <Link to={`/user/${user.id}`}>{user.name}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
      <button
        onClick={() => {
          console.log("ola");
          navigate("/createnew");
        }}
      >
        Crear New
      </button>
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};
