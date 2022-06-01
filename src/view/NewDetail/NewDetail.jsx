import { useParams } from "react-router-dom";
import useNews from "../../hooks/useNews";

export const NewDetail = () => {
  const { idNew } = useParams();
  const { news, loading, error } = useNews(idNew);
  console.log(idNew);
  console.log(news);
  if (loading) return <p>Cargando</p>;
  if (error) console.error(error);
  return (
    <div>
      <p>{news[0]?.title}</p>
    </div>
  );
};
