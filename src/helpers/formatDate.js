export const dateFormater = (date) => {
  const arrayFormatedDate = date.toISOString().split("T");
  const formatedCurrentDate = `${arrayFormatedDate[0]}`;
  return formatedCurrentDate;
};
export const stringDateFormater = (stringDate) => {
  return stringDate.split("T")[0];
};
