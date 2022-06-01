import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewByIdService } from "../../services";

export const NewDetail = () => {
  const { idNew } = useParams();
  const [_new, setNew] = useState({});
  const [ok, setOk] = useState(false);

  const [err, setErr] = useState("");
  useEffect(() => {
    const load = async () => {
      try {
        setNew(await getNewByIdService(idNew));
        setOk(true);
      } catch (error) {
        console.error(error, "error");
        setErr(error.message);
      }
    };
    load();
  }, [idNew, ok]);

  return (
    <div>
      {/* {err ? (
        <h2>{err}</h2>
      ) : ( */}
      {ok ? (
        <>
          <h2>{_new?.dataNew?.title}</h2>
          <p>{_new?.dataNew?.entradilla}</p>
          <p>{_new?.dataNew?.description}</p>
          <p>{_new?.dataNew?.topic}</p>

          <img
            src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${_new.dataImage[0].url}`}
            alt={_new?.dataNew?.title}
          />
        </>
      ) : null}
      {/* )} */}
    </div>
  );
};
