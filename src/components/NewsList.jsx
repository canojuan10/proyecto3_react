import { New } from "./New";
export const NewsList = ({ news, error }) => {
  return news.length ? (
    <ul>
      {news
        .slice(0)
        .reverse()
        .map((_new, index) => {
          return (
            <li key={index}>
              <New _new={_new} />
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
