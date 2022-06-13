import { useEffect, useState } from "react";

import { dateFormater } from "../helpers/formatDate";
import { getNewsByVotes } from "../services";
import { Loading, loadResultsMessage } from "./Loading";
import { New } from "./New";

export const ListbyVotes = () => {
  const [newsVotes, setNewsVotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [date, setDate] = useState(dateFormater(new Date()));

  useEffect(() => {
    const loadNewsByVotes = async () => {
      try {
        setLoading(true);
        const data = await getNewsByVotes({ date });
        console.log(data);

        setNewsVotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNewsByVotes();
  }, [date]);

  return loading ? (
    <Loading message={loadResultsMessage} />
  ) : newsVotes.length ? (
    <div className="list-by-votes">
      <h3>NOTICIAS MEJOR VALORADAS</h3>
      <ul>
        {newsVotes.slice(0, 5).map((newVotes, index) => {
          return (
            <li key={index}>
              <New _new={newVotes} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : error ? (
    <h2>Problemas de conexión con el servidor</h2>
  ) : (
    <p>No hay noticias sobre el tema</p>
  );
};
