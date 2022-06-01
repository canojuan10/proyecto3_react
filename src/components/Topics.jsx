import propTypes from "prop-types";

export const Topics = ({ setValue, value }) => {
  return (
    <fieldset>
      <label htmlFor="topic">Tema</label>
      <select
        required
        autoFocus
        value={value}
        name="topic"
        id="topic"
        onChange={(e) => {
          setValue(e.target.value);
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
  );
};

Topics.propTypes = {
  value: propTypes.string.isRequired,
  setValue: propTypes.func.isRequired,
};
