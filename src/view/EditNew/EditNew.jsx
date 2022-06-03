import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewForm } from "../../components/CreateNewForm";
import { AuthContext } from "../../context/AuthContext";
import { useNew } from "../../hooks/useNew";
import { editNewService } from "../../services";

export const EditNew = () => {
  const { idNew } = useParams();
  const { _new, error, loading, setError } = useNew(idNew);
  const { token } = useContext(AuthContext);
  const [messageConfirm, setMessageConfirm] = useState(null);
  const [chooseOption, setChooseOption] = useState("");
  const [topic, setTopic] = useState("");
  const newToEdit = {
    title: "Un título",
    description: "una noticia",
    entradilla: "una entradilla",
    topic: "galicia",
  };
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);

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

  return messageConfirm ? (
    <>
      <p>{messageConfirm.messageNew}</p>
      <p>{messageConfirm.messageImage}</p>
    </>
  ) : (
    <>
      <h1>Añadir noticias</h1>
      <CreateNewForm
        newValue={_new}
        setTopic={setTopic}
        handleForm={handleForm}
        chooseOption={chooseOption}
      />
      {error ? <p>{error}</p> : null}
      {loading ? <p>posting tweet...</p> : null}
    </>
  );
};
