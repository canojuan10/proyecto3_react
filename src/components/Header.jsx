import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        {/* Añadir ICONO-css */}
        <Link to={"/"}>HACK A NEW</Link>
      </h1>
      <nav>
        <p>login/register</p>
      </nav>
    </header>
  );
};
