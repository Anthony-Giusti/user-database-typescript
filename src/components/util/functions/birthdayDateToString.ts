import date from 'date-and-time';

const brithdayDateToString = (birthday: Date): string =>
  date.format(birthday, 'MM-DD-YYYY');

export default brithdayDateToString;
