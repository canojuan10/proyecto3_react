import { useContext, useState } from "react";
import propTypes from "prop-types";
import {
  deleteAvatarService,
  getUserByIdService,
  uploadAvatarService,
} from "../services";
import "./style.css";
import { Loading, editUserMessage } from "./Loading";
import { errorFetchMessage, Error } from "./Error";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export const UploadAvatar = ({ token, id, userData, setUrl, setEdited }) => {
  const [messageConfirm, setMessageConfirm] = useState("");
  const [error, setError] = useState("");
  const { idUser } = useParams();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (userData.url) {
        const idAvatar = userData.idAvatar;
        await deleteAvatarService({ idAvatar, id, token });
      }
      const data = new FormData(e.target);
      if (data) {
        const response = await uploadAvatarService({ id, data, token });
        setMessageConfirm(response.data.message);
        setEdited(false);
      }
    } catch (error) {
      setError(errorFetchMessage);
    } finally {
      const editedUser = await getUserByIdService(idUser);
      setUser(editedUser);
      setUrl(editedUser.url);
      setLoading(false);
    }
  };
  return loading ? (
    <Loading message={editUserMessage} />
  ) : error ? (
    <Error message={error} />
  ) : (
    <>
      <h1>Editar Avatar</h1>
      <form className="createNew" onSubmit={handleForm}>
        <fieldset>
          {userData.url ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_AVATAR_DIR}/${userData.url}`}
              alt={userData?.name}
              style={{ width: "75px" }}
            />
          ) : null}
          <label htmlFor="image">Imagen</label>
          <input type="file" name="photo" id="image" accept={"image/*"} />
        </fieldset>
        <button>Subir Avatar</button>
      </form>
      {messageConfirm ? <p>{messageConfirm}</p> : null}
    </>
  );
};
UploadAvatar.propTypes = {
  token: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  userData: propTypes.object.isRequired,
  setUrl: propTypes.func.isRequired,
  setEdited: propTypes.func.isRequired,
};
