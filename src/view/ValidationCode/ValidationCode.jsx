import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateUser } from "../../services";

export const ValidationCode = () => {
  const { registrationCode } = useParams();
  const [validateMessage, setValidateMessage] = useState("");
  const [popUp, setPopUp] = useState("");
  const [error, setError] = useState(false);
  const mounted = useRef(false);

  const navigate = useNavigate();
  useEffect(() => {
    const validate = async () => {
      try {
        setValidateMessage(await validateUser({ registrationCode }));
        setPopUp(true);
      } catch (error) {
        setError(error.message);
      }
    };
    if (!mounted.current) validate();
    mounted.current = true;
  }, [registrationCode, popUp, navigate]);

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
        </>
      ) : null}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Volver a inicio
      </button>
    </section>
  );
};
