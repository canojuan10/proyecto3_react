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
        <a
          href="https://github.com/wicket-warrick/PROXECTO2_NODE"
          target="_blank"
          rel="noreferrer"
        >
          BackEnd
        </a>

        <a
          href="https://github.com/canojuan10/proyecto3_react"
          target="_blank"
          rel="noreferrer"
        >
          FrontEnd
        </a>
      </div>
      {/* icono-link repositorio FrontEnd */}
    </footer>
  );
};
