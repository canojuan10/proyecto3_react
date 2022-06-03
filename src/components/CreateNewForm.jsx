import { useEffect, useState } from "react";
import { Topics } from "./Topics";

export const CreateNewForm = ({
  handleForm,
  chooseOption,
  setTopic,
  newValue,
  topic,
}) => {
  const [title, setTitle] = useState("");
  const [entradilla, setEntradilla] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setDescription(newValue.description);
    setTitle(newValue.title);
    setEntradilla(newValue.entradilla);
  }, [newValue.title, newValue.description, newValue.entradilla]);
  useEffect(() => {
    setTopic(newValue.topic);
  }, [newValue]);
  return (
    <form className="createNew" onSubmit={handleForm}>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={entradilla}
          onChange={(e) => setEntradilla(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
  );
};
