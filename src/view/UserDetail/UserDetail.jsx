import { useParams } from "react-router-dom";
import { UserDetailComponent } from "../../components/UserDetailComponent";
import { useUser } from "../../hooks/useUser";

export const UserDetail = () => {
  const { idUser } = useParams();
  const { userData, loading, error } = useUser(idUser);

  return !loading ? (
    <UserDetailComponent userData={userData} error={error} />
  ) : null;
};
