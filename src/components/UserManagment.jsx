import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UserManagment = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      Logged in as <Link to={`/user/${user.id}`}>{user.name}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
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
