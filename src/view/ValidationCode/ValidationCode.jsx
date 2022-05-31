import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { validateUser } from "../../services";

export const ValidationCode = () => {
  const { registrationCode } = useParams();
  const [validateMessage, setValidateMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const validate = async () => {
      try {
        setValidateMessage(await validateUser({ registrationCode }));
      } catch (error) {
        setError(error.message);
      }
    };
    validate();
  });

  return (
    <section>
      <h2>{validateMessage}</h2>
      <h2>{error ? error : null}</h2>
    </section>
  );
};
