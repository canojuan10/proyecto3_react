import { New } from "./New";
import { Error, errorFetchMessage } from "./Error";
import "./style.css";
export const NewsList = ({ news, error, deleteNew }) => {
  return news.length ? (
    <ul>
      {news
        .slice(0)
        .reverse()
        .map((_new, index) => {
          return (
            <li key={index}>
              <New _new={_new} deleteNew={deleteNew} />
            </li>
          );
        })}
    </ul>
  ) : error ? (
    <Error message={errorFetchMessage} />
  ) : (
    <p>no hay noticias sobre el tema</p>
  );
};
