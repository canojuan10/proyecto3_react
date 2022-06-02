import useNews from "../../hooks/useNews";
import { NewsFilter } from "../../components/NewsFilter";
import { NewsList } from "../../components/NewsList";
import { Calendar } from "../../components/Calendar";

export const Home = () => {
  const { news, loading, error, setDate, setTopic, topic, date } = useNews();
  if (loading) return <p>Cargando</p>;
  if (error) console.log(error);
  return (
    <div>
      <Calendar date={date} setDate={setDate} />
      <h1>Latest tweets</h1>
      <NewsFilter setTopic={setTopic} topic={topic} />
      <NewsList news={news} error={error} />
    </div>
  );
};
