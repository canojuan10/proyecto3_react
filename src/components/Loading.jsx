import loading from "../image/loading.svg";

export const Loading = ({ message }) => {
  return (
    <>
      <div className="loading">
        <img src={loading} alt="Loading  animation" />
        <h2>{message}</h2>
      </div>
    </>
  );
};
export const loginMessage = "Accediendo a tu perfil...";
export const loadResultsMessage = "Cargando resultados...";
export const loadNewMessage = "Cargando la noticia...";
export const sendFormMessage = "Enviando formulario de registro...";
export const createNewMessage = "Creando noticia...";
