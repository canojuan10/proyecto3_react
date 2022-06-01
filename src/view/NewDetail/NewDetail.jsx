import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNews from "../../hooks/useNews";
import { getNewByIdService } from "../../services";

export const NewDetail = () => {
  const { idNew } = useParams();
  const { loading, error } = useNews();
  const [_new, setNew] = useState([]);
  useEffect(() => {
    console.log(idNew);
    const load = async () => {
      setNew(await getNewByIdService(idNew));
    };
    load();
  }, [idNew]);
  if (loading) return <p>Cargando</p>;
  if (error) console.error(error);
  return (
    <div>
      <h2>{_new?.title}</h2>
      <p>{_new?.entradilla}</p>
      <p>{_new?.description}</p>
      <p>{_new?.topic}</p>
    </div>
  );
};
