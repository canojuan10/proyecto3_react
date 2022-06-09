import { useState } from "react";
import { deleteAvatarService, uploadAvatarService } from "../services";
import "./style.css";
export const UploadAvatar = ({ token, id, userData, setUrl, setEdited }) => {
  const [messageConfirm, setMessageConfirm] = useState("");
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
        console.log(data);
        setMessageConfirm(response.data.message);
        setUrl(response.data.url);
        setEdited(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
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
          <label htmlFor="image">Image</label>
          <input type="file" name="photo" id="image" accept={"image/*"} />
        </fieldset>
        <button>Subir Avatar</button>
      </form>
      {messageConfirm ? <p>{messageConfirm}</p> : null}
    </>
  );
};
