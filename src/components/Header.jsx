import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        {/* Añadir ICONO-css */}
        <Link to={"/"}>HACK A NEW</Link>
      </h1>
      <nav>
        <Link to={"/login"}>Login</Link>
        <br></br>
        <Link to={"/register"}>Register</Link>
      </nav>
    </header>
  );
};
