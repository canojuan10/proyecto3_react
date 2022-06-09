import "./style.css";
export const Footer = () => {
  return (
    <footer>
      <p>© 2022 HACK A BOSS</p>
      <p>
        {/* icono linkedin */}
        <a
          href="https://www.linkedin.com/in/juanfernandezmirandacano"
          target="_blank"
          rel="noreferrer"
        >
          Juan Fernández{" "}
        </a>
        &{" "}
        <a
          href="https://www.linkedin.com/in/hugosuarezdevp"
          target="_blank"
          rel="noreferrer"
        >
          Hugo Suárez
        </a>
      </p>
      {/* icono-link HAB */}
      {/* icono-link repositorio Backend */}
      <div>
        <p> backend</p>
        <p> frontend</p>
      </div>
      {/* icono-link repositorio FrontEnd */}
    </footer>
  );
};
