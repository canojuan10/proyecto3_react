import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendNewService } from "../../services";
import { Topics } from "../../components/Topics";

export const CreateNew = () => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageConfirm, setMessageConfirm] = useState(null);
  const [chooseOption, setChooseOption] = useState("");
  const [topic, setTopic] = useState("");
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);
      if (!data.get("entradilla")) data.delete("entradilla");

      const _new = await sendNewService({
        data,
        token,
      });
      setMessageConfirm(_new);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
      <form className="createNew" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            minLength={1}
            maxLength={50}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="subtitle">Entradilla</label>
          <textarea
            name="entradilla"
            id="subtitle"
            minLength={0}
            maxLength={100}
          ></textarea>
        </fieldset>
        <Topics value={chooseOption} setValue={setTopic} />
        <fieldset>
          <label htmlFor="description">Noticia</label>
          <textarea
            name="description"
            id="description"
            minLength={50}
            maxLength={800}
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="image">Image</label>
          <input type="file" name="photo" id="image" accept={"image/*"} />
        </fieldset>
        <button>Subir noticia</button>
      </form>
      {error ? <p>{error}</p> : null}
      {loading ? <p>creando noticia...</p> : null}
    </>
  );
};
