import { Link } from "react-router-dom";

export const NewHighLight = ({ _new, isDetail = false }) => {
  return (
    <article className="new">
      <h2>{_new?.title}</h2>
      <p className="entradilla">{_new?.entradilla}</p>
      <p className="topic">{_new?.topic}</p>
      {!isDetail ? <Link to={`/new/${_new?.id}`}>+ info</Link> : null}
    </article>
  );
};
