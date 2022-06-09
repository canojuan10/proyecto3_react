import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./style.css";
export const UserManagment = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return user ? (
    <section>
      <div>
        <span>Logged in as</span>{" "}
        <Link to={`/user/${user.id}`}>{user.name}</Link>{" "}
      </div>
      <div>
        <button onClick={() => logout()}>Logout</button>
        <button
          onClick={() => {
            console.log("ola");
            navigate("/createnew");
          }}
        >
          Crear New
        </button>
      </div>
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
