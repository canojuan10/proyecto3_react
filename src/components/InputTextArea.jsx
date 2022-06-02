import propTypes from "prop-types";

export const InputTextArea = ({ value, setValue, name, label }) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
    </fieldset>
  );
};

InputTextArea.propTypes = {
  setValue: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};
