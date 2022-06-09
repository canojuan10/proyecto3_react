import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { stringDateFormater } from "../helpers/formatDate";
import { deleteUserService } from "../services";
import { UploadAvatar } from "./UploadAvatar";
import "./style.css";
export const UserDetailComponent = ({ userData, error }) => {
  const navigate = useNavigate();
  const [edited, setEdited] = useState(false);
  const { logout } = useContext(AuthContext);
  const { user, token, setError } = useContext(AuthContext);
  const [url, setUrl] = useState(userData.url);

  const removeUser = async (idUser, token) => {
    try {
      await deleteUserService({ idUser, token });
      logout();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <article className="user">
      <h2>{userData?.name}</h2>
      <p className="bio">{userData?.bio}</p>
      <p className="createdAt">{stringDateFormater(userData?.createdAt)}</p>
      <p className="email">{userData?.email}</p>

      {userData?.url ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_AVATAR_DIR}/${url}`}
          alt={userData?.name}
        />
      ) : null}

      {user && user.id === userData.id ? (
        <section>
          <button
            onClick={() => {
              setEdited(true);
            }}
          >
            Edit Avatar
          </button>
          <button
            onClick={(e) => {
              removeUser(userData.id, token);
            }}
          >
            Delete user
          </button>
          <button onClick={() => {}}>Edit user</button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
      {edited ? (
        <UploadAvatar
          token={token}
          id={user.id}
          userData={userData}
          setEdited={setEdited}
          setUrl={setUrl}
        />
      ) : null}
    </article>
  );
};
