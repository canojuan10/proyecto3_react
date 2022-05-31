import propTypes from "prop-types";
import { useEffect, useState } from "react";

export const NewsFilter = ({ setDate, setTopic, topic }) => {
  const [chooseOption, setChooseOption] = useState("");
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);
  return (
    <form>
      <fieldset>
        <label htmlFor="topic">Tema</label>
        <select
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
    </form>
  );
};

NewsFilter.propTypes = {
  topic: propTypes.string.isRequired,
  setDate: propTypes.func.isRequired,
  setTopic: propTypes.func.isRequired,
};
