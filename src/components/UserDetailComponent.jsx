import { useContext, useState } from "react";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { stringDateFormater } from "../helpers/formatDate";
import { deleteUserService } from "../services";
import { UploadAvatar } from "./UploadAvatar";
import "./style.css";
import { Error } from "./Error";
import { Loading, loginMessage, deleteUserMessage } from "./Loading";
export const UserDetailComponent = ({ userData, error }) => {
  const navigate = useNavigate();
  const [edited, setEdited] = useState(false);
  const { logout } = useContext(AuthContext);
  const { user, token, setError } = useContext(AuthContext);
  const [url, setUrl] = useState(userData.url);
  const [loadingSendForm, setLoadingSendForm] = useState(false);
  const removeUser = async (idUser, token) => {
    setLoadingSendForm(true);
    try {
      await deleteUserService({ idUser, token });
      logout();
      setLoadingSendForm(false);
      navigate("/");
    } catch (error) {
      setLoadingSendForm(false);
      setError(error.message);
    }
  };
  return loadingSendForm ? (
    <Loading message={deleteUserMessage} />
  ) : (
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
            Editar Avatar
          </button>
          <button
            onClick={(e) => {
              removeUser(userData.id, token);
            }}
          >
            Borrar Usuario
          </button>
          <button
            onClick={() => {
              navigate(`/user/${user.id}/edit`);
            }}
          >
            Editar Usuario
          </button>
          {error ? <Error message={error} /> : null}
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
      <Link to="/">Volver al inicio</Link>
    </article>
  );
};

UserDetailComponent.propTypes = {
  error: propTypes.string.isRequired,
  userData: propTypes.object.isRequired,
};