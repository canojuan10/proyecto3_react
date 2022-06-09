import useNews from "../../hooks/useNews";
import { NewsFilter } from "../../components/NewsFilter";
import { NewsList } from "../../components/NewsList";
import { Calendar } from "../../components/Calendar";
import "./style.css";

export const Home = () => {
  const { news, loading, error, setDate, setTopic, topic, date, deleteNew } =
    useNews();
  if (loading) return <p>Cargando</p>;
  if (error) console.log(error);
  return (
    <div>
      <h2>LASTEST NEWS</h2>
      <div>
        <Calendar date={date} setDate={setDate} />
        <NewsFilter setTopic={setTopic} topic={topic} />
      </div>
      <NewsList news={news} error={error} deleteNew={deleteNew} />
    </div>
  );
};
