import { useEffect, useState } from "react";
import { getAllNewsService } from "../services/index";
import { dateFormater } from "../helpers/formatDate";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(dateFormater(new Date()));

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const data = await getAllNewsService({ date, topic });

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [date, topic]);

  //   const addTweet = (data) => {
  //     setTweets([data, ...tweets]);
  //   };

  const deleteNew = (id) => {
    setNews(news.filter((_new) => _new.id !== id));
  };

  //   return { tweets, error, loading, addTweet, removeTweet };
  return { news, error, loading, setTopic, setDate, topic, date, deleteNew };
};

export default useNews;
