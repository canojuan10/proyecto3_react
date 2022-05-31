import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateUser } from "../../services";

export const ValidationCode = () => {
  const { registrationCode } = useParams();
  const [validateMessage, setValidateMessage] = useState("");
  const [popUp, setPopUp] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const validate = async () => {
      try {
        setValidateMessage(await validateUser({ registrationCode }));
        setPopUp(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (error) {
        setError(error.message);
      }
    };
    validate();
  });

  return (
    <section>
      {popUp ? (
        <article>
          <h2>{validateMessage}</h2>
          <p>Redirigiendo a la página principal</p>
        </article>
      ) : null}
      {error ? (
        <>
          <h2>{error}</h2>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Volver a inicio
          </button>
        </>
      ) : null}
    </section>
  );
};
