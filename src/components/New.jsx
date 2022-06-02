import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { stringDateFormater } from "../helpers/formatDate";

export const New = ({ _new }) => {
  return (
    <article className="new">
      <h2>{_new?.title}</h2>
      <p className="entradilla">{_new?.entradilla}</p>
      <p className="createdAt">{stringDateFormater(_new?.createdAt)}</p>
      <p className="topic">{_new?.topic}</p>
      <p className="author">{_new?.name}</p>

      {_new?.url ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${_new?.url}`}
          alt={_new?.title}
        />
      ) : null}

      <Link to={`/new/${_new?.id}`}>+ info</Link>
    </article>
  );
};

New.propTypes = {
  _new: propTypes.object.isRequired,
};
