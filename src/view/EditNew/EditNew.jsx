import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateNewForm } from "../../components/CreateNewForm";
import { AuthContext } from "../../context/AuthContext";
import { useNew } from "../../hooks/useNew";
import {
  deletePhotoService,
  editNewService,
  uploadNewPhotoServices,
} from "../../services";

export const EditNew = () => {
  const { idNew } = useParams();
  const { _new, error, loading, setError } = useNew(idNew);
  const { token } = useContext(AuthContext);
  const [messageConfirmEditNew, setMessageConfirmEditNew] = useState(null);
  const [messageConfirmUpdatePhoto, setMessageConfirmUpdatePhoto] =
    useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      console.log(data);
      const response = await editNewService({
        data,
        token,
        idNew,
      });
      if (data.photo) {
        const idPhoto = _new.image_id;
        await deletePhotoService({
          idNew,
          idPhoto,
          token,
        });
        const responseUpdatePhoto = await uploadNewPhotoServices({
          idNew,
          token,
          data: data.photo,
        });
        setMessageConfirmUpdatePhoto(responseUpdatePhoto);
      }
      setMessageConfirmEditNew(response);
    } catch (error) {
      setError(error.message);
    }
  };
  if (loading) return <p>loading</p>;
  return messageConfirmEditNew || messageConfirmUpdatePhoto ? (
    <>
      {messageConfirmEditNew ? <p>{messageConfirmEditNew}</p> : null}
      {messageConfirmUpdatePhoto ? <p>{messageConfirmUpdatePhoto}</p> : null}

      <Link to={`/new/${idNew}`}>Volver a la noticia</Link>
    </>
  ) : (
    <>
      <h1>Añadir noticias</h1>
      <CreateNewForm newValue={_new} handleForm={handleForm} />
      {error ? <p>{error}</p> : null}
      {loading ? <p>posting tweet...</p> : null}
    </>
  );
};
