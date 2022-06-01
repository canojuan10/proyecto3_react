import { Link } from "react-router-dom";

export const NewsList = ({ news }) => {
  return news.length ? (
    <ul>
      {news
        .slice(0)
        .reverse()
        .map((_new, index) => {
          return (
            <li key={index}>
              <h2>{_new.title}</h2>
              <p>{_new.entradilla}</p>
              <Link to={`/new/${_new.id}`}>+ info</Link>
            </li>
          );
        })}
    </ul>
  ) : (
    <h2>No hay ninguna noticia sobre este tema</h2>
  );
};
