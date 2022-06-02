import propTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stringDateFormater } from "../helpers/formatDate";
import { AuthContext } from "../context/AuthContext";
//import { deleteNewService, deletePhotoService } from "../services";

export const New = ({ _new, deleteNew, isDetail = false }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const removeNew = async (id) => {
    // try {
    //   if (_new.image_id) {
    //     await deletePhotoService({ id, token, idPhoto: _new.image_id });
    //   }
    //   await deleteNewService({ id, token });
    //   if (deleteNew) {
    //     deleteNew(id);
    //   } else {
    //     navigate("/");
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };
  console.log(_new, user, token);

  return (
    <article className="new">
      <h2>{_new?.title}</h2>
      <p className="entradilla">{_new?.entradilla}</p>
      {isDetail ? <p className="description">{_new?.description}</p> : null}
      <p className="createdAt">{stringDateFormater(_new?.createdAt)}</p>
      <p className="topic">{_new?.topic}</p>
      <p className="author">{_new?.name}</p>

      {_new?.url ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${_new?.url}`}
          alt={_new?.title}
        />
      ) : null}

      {!isDetail ? <Link to={`/new/${_new?.id}`}>+ info</Link> : null}

      {user && user.id === _new.user_id ? (
        <section>
          <button
            onClick={() => {
              removeNew(_new.id);
            }}
          >
            Delete new
          </button>
          <button
            onClick={() => {
              navigate(`/edit/${_new?.id}`);
            }}
          >
            Edit new
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};

New.propTypes = {
  _new: propTypes.object.isRequired,
};
