import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { validateUser } from "../../services";
import "./style.css";
export const ValidationCode = () => {
  const { registrationCode } = useParams();
  const [validateMessage, setValidateMessage] = useState("");
  const [error, setError] = useState(false);
  const mounted = useRef(false);

  const navigate = useNavigate();
  useEffect(() => {
    const validate = async () => {
      try {
        setValidateMessage(await validateUser({ registrationCode }));
      } catch (error) {
        setError(error.message);
      }
    };
    if (!mounted.current) validate();
    mounted.current = true;
  }, [registrationCode, navigate]);

  return (
    <section className="validation">
      {error ? (
        <>
          <Error message={error} />
        </>
      ) : (
        <h3>{validateMessage}</h3>
      )}
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
