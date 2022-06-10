import propTypes from "prop-types";
import error from "../image/error.png";
export const Error = ({ message }) => {
  return (
    <>
      <div className="error">
        <img src={error} alt="" />
        <h2>{message}</h2>
      </div>
    </>
  );
};
export const errorFetchMessage = "Error de conexión con el servidor.";
Error.propTypes = {
  message: propTypes.string.isRequired,
};
