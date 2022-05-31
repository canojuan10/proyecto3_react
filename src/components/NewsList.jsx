export const NewsList = ({ news, error }) => {
  console.log(news);
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
