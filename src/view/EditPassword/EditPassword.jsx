import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading, editPasswordMessage } from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { editPassword } from "../../services";
import { InputStringRegister } from "../../components/InputStringRegister";

import { Error, errorPasswordMessage } from "../../components/Error";

export const EditPassword = () => {
  const [loading, setLoading] = useState(false);
  const { idUser } = useParams();
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [message, SetMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await editPassword({
        currentPassword,
        newPassword,
        token,
        idUser,
      });
      setLoading(false);
      SetMessage(response.message);
    } catch (error) {
      setLoading(false);
      setError(errorPasswordMessage);
    }
  };
  return loading ? (
    <Loading message={editPasswordMessage} />
  ) : message ? (
    <>
      <p>{message}</p>
      <button
        onClick={() => {
          navigate(`/user/${idUser}`);
        }}
      >
        Volver al perfil
      </button>
    </>
  ) : (
    <>
      <h1>Cambio de Password:</h1>
      <form onSubmit={handleForm}>
        <InputStringRegister
          value={currentPassword}
          setValue={setCurrentPassword}
          inputType="password"
          name="currentPassword"
          label="Password actual: "
        />
        <InputStringRegister
          value={newPassword}
          setValue={setNewPassword}
          inputType="password"
          name="newPassword"
          label="Nuevo password:"
        />

        <button>Actualizar Password</button>
        {error ? <Error message={error} /> : null}
      </form>
    </>
  );
};
