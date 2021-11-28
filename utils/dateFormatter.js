function dateFormatter(rawDate) {
  const dateArray = rawDate.toDateString().split(' ');
  const month = dateArray[1];
  const date = dateArray[2];
  const year = dateArray[3];
  return `${month} ${date} ${year}`;
}

module.exports = dateFormatter;
