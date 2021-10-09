const ConvertDateHandler = (date) => {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  let newdate = year + "/" + month + "/" + day;
  return newdate;
};

export { ConvertDateHandler };
