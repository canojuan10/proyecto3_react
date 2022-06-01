import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendNewService } from "../../services";

export const CreateNew = () => {
  const { token } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageConfirm, setMessageConfirm] = useState(null);
  const [chooseOption, setChooseOption] = useState(""); //quitar al component
  const [topic, setTopic] = useState("");
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);

      const _new = await sendNewService({
        data,
        token,
      });
      setMessageConfirm(_new);
    } catch (err) {
      setError(err.message);
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
            minLength={15}
            maxLength={100}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="topic">Tema</label>
          <select
            required
            autoFocus
            value={chooseOption}
            name="topic"
            id="topic"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            <option value="">Todos los temas</option>
            <option value="politica">Política</option>
            <option value="espana">España</option>
            <option value="deportes">Deportes</option>
            <option value="tecnologia">Tecnología</option>
            <option value="viajes">Viajes</option>
            <option value="economia">Economía</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="salud">Salud</option>
            <option value="internacional">Internacional</option>
            <option value="galicia">Galicia</option>
          </select>
        </fieldset>
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
        <button>Send tweet</button>
        {/* {error ? <p>{error}</p> : null}
        {loading ? <p>posting tweet...</p> : null} */}
      </form>
    </>
  );
};
