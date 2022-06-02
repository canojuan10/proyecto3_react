import { useParams } from "react-router-dom";
import { New } from "../../components/New";
import { useNew } from "../../hooks/useNew";

export const NewDetail = () => {
  const { idNew } = useParams();
  const { _new, error, loading } = useNew(idNew);
  return loading ? null : <New _new={_new} />;
};
