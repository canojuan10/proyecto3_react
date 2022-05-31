import useNews from "../../hooks/useNews";
import { NewsFilter } from "../../components/NewsFilter";
export const Home = () => {
  const { news, loading, error, setDate, setTopic, topic } = useNews();
  if (loading) return <p>Cargando</p>;
  if (error) console.log(error);
  console.log(news);
  return (
    <div>
      <h1>Latest tweets</h1>
      <NewsFilter setDate={setDate} setTopic={setTopic} topic={topic} />
      <section>
        {news.map((_new, index) => {
          return (
            <article key={index}>
              <p>{_new.title}</p>
              <p>{_new.entradilla}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
