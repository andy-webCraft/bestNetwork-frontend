const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

/** Getting a date from a string
 * @param {string} dateString - date string
 * @example YYYY-MM-DDTHH:mm:ss.sssZ
 * @returns {string}
 */
const getDateFromUTC = (dateString) => {
  const date = new Date(dateString);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default getDateFromUTC;
