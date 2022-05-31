export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=2022-06-30&topic=${topic}`
  );
  const json = await response.json();
  console.log(json);
  if (!response.ok) throw new Error(json.message);
  return json.data;
};
