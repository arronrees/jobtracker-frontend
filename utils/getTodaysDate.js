export const getTodaysDate = () => {
  const date = new Date();

  let year = date.getFullYear().toString();
  let month = date.getMonth().toString();
  let day = date.getDate().toString();

  month = (parseFloat(month) + 1).toString();

  if (month.length === 1) {
    month = `0${month}`;
  }

  if (day.length === 1) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
