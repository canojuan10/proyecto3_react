import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewByIdService } from "../../services";

export const NewDetail = () => {
  const { idNew } = useParams();
  const [_new, setNew] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    console.log(idNew);
    const load = async () => {
      try {
        setNew(await getNewByIdService(idNew));
      } catch (error) {
        console.error(error, "error");
        setErr(error.message);
      }
    };
    load();
  }, [idNew]);

  return (
    <div>
      {err ? (
        <h2>{err}</h2>
      ) : (
        <>
          <h2>{_new?.title}</h2>
          <p>{_new?.entradilla}</p>
          <p>{_new?.description}</p>
          <p>{_new?.topic}</p>
        </>
      )}
    </div>
  );
};
