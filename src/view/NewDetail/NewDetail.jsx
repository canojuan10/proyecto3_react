import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewByIdService } from "../../services";

export const NewDetail = () => {
  const { idNew } = useParams();
  const [_new, setNew] = useState({});

  const [error, setError] = useState("");
  useEffect(() => {
    const load = async () => {
      try {
        setNew(await getNewByIdService(idNew));
      } catch (error) {
        setError(error.message);
      }
    };
    load();
  }, [idNew]);

  return (
    <div>
      {/* {err ? (
        <h2>{err}</h2>
      ) : ( */}

      <>
        <h2>{_new?.title}</h2>
        <p>{_new?.entradilla}</p>
        <p>{_new?.description}</p>
        <p>{_new?.topic}</p>

        {_new?.url ? (
          <img
            src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${_new?.url}`}
            alt={_new?.title}
          />
        ) : null}
      </>

      {/* )} */}
    </div>
  );
};
