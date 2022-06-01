
import { Link } from "react-router-dom";
export const NewsList = ({ news, error }) => {

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
  ) : error ? (
    <h2>problemas de conexión con el servidor</h2>
  ) : (
    <p>no hay noticias sobre el tema</p>
  );
};
