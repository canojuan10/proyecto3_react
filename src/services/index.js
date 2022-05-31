export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=${date}&topic=${topic}`
  );
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.data;
};

export const createUserService = async ({ name, email, password, bio }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, bio }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
export const validateUser = async ({ registrationCode }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/validate/${registrationCode}`
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
