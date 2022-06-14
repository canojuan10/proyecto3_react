import propTypes from "prop-types";
import error from "../image/error.png";
export const Error = ({ message }) => {
  return (
    <>
      <div className="error">
        <img src={error} alt="" />
        <h4>{message}</h4>
      </div>
    </>
  );
};
export const errorFetchMessage = "Error de conexión con el servidor.";
Error.propTypes = {
  message: propTypes.string.isRequired,
};
