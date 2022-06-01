import propTypes from "prop-types";

export const InputStringRegister = ({
  value,
  setValue,
  inputType,
  name,
  label,
}) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
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

InputStringRegister.propTypes = {
  setValue: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  inputType: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};
