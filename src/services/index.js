export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=2022-06-30&topic=${topic}`
  );
  const json = await response.json();
  console.log(json);
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
