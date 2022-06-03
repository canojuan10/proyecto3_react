import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateNewForm } from "../../components/CreateNewForm";
import { AuthContext } from "../../context/AuthContext";
import { useNew } from "../../hooks/useNew";
import { editNewService } from "../../services";

export const EditNew = () => {
  const { idNew } = useParams();
  const { _new, error, loading, setError } = useNew(idNew);
  const { token } = useContext(AuthContext);
  const [messageConfirm, setMessageConfirm] = useState(null);

  const newToEdit = {};

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      if (data.get("title") === newToEdit.entradilla) {
        data.delete("entradilla");
      }
      if (data.get("entradilla") === newToEdit.entradilla) {
        data.delete("entradilla");
      }
      if (data.get("description") === newToEdit.description) {
        data.delete("description");
      }
      if (data.get("topic") === newToEdit.topic) {
        data.delete("topic");
      }

      const response = await editNewService({
        data,
        token,
        idNew,
      });
      setMessageConfirm(response);
    } catch (error) {
      setError(error.message);
    }
  };
  if (loading) return <p>loading</p>;
  return messageConfirm ? (
    <>
      <p>{messageConfirm}</p>
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
