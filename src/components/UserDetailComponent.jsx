import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { stringDateFormater } from "../helpers/formatDate";

export const UserDetailComponent = ({ userData, error }) => {
  const { user } = useContext(AuthContext);
  console.log(user.id, "user.id", userData.id, "userData.id");
  return (
    <article className="user">
      <h2>{userData?.name}</h2>
      <p className="bio">{userData?.bio}</p>
      <p className="createdAt">{stringDateFormater(userData?.createdAt)}</p>
      <p className="email">{userData?.email}</p>

      {userData?.url ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_AVATAR_DIR}/${userData?.url}`}
          alt={userData?.title}
        />
      ) : null}

      {user && user.id === userData.id ? (
        <section>
          <button onClick={() => {}}>Edit Avatar</button>
          <button onClick={() => {}}>Delete user</button>
          <button onClick={() => {}}>Edit user</button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
