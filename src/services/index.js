export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=${date}&topic=${topic}`
  );
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.data;
};
