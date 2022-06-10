import { useState } from "react";

import { InputStringRegister } from "../../components/InputStringRegister";
import { recoveryPassService, resetPassService } from "../../services";

export const RecoveryPassword = () => {
  const [error, setError] = useState("");
  const [recoveryMessage, setRecoveryMessage] = useState("");
  const [recovery, setRecovery] = useState(false);
  const [reset, setReset] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [recoverCode, setRecoverCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [email, setEmail] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await recoveryPassService({ email });
      setRecoveryMessage(response);
      setRecovery(true);
      setError("");
    } catch (error) {
      setError(error.message);
      setRecoveryMessage("");
    }
  };

  const handleForm2 = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassService({ recoverCode, newPassword });
      setResetMessage(response);
      setReset(true);
      setError("");
    } catch (error) {
      setError(error.message);
      setResetMessage("");
    }
  };

  return !recovery ? (
    <form onSubmit={handleForm}>
      <InputStringRegister
        value={email}
        setValue={setEmail}
        inputType="email"
        name="email"
        label="Email: "
      />
      <button>Recover Code</button>
    </form>
  ) : !reset ? (
    <>
      <p>{recoveryMessage}</p>

      <form onSubmit={handleForm2}>
        <InputStringRegister
          value={recoverCode}
          setValue={setRecoverCode}
          inputType="text"
          name="recoverCode"
          label="Recover Code: "
        />
        <InputStringRegister
          value={newPassword}
          setValue={setNewPassword}
          inputType="password"
          name="New password"
          label="New Password: "
        />
        <button>Reset Password</button>
      </form>
    </>
  ) : (
    <p> {resetMessage} </p>
  );
};
