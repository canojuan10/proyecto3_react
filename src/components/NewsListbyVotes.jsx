import { useEffect, useState } from "react";

import { dateFormater } from "../helpers/formatDate";
import { getNewsByVotes } from "../services";
import { NewHighLight } from "./NewHighLights";

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

        setNewsVotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNewsByVotes();
  }, [date]);

  return newsVotes.length ? (
    <ul>
      {newsVotes
        .slice(0, 5)
        .reverse()
        .map((newVotes, index) => {
          return (
            <li key={index}>
              <NewHighLight newVotes={newVotes} />
            </li>
          );
        })}
    </ul>
  ) : error ? (
    <h2>Problemas de conexión con el servidor</h2>
  ) : (
    <p>No hay noticias sobre el tema</p>
  );
};
