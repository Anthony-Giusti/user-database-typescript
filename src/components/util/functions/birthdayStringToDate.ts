import date from 'date-and-time';

const brithdayStringToDate = (birthday: string): Date =>
  date.parse(birthday, 'MM-DD-YYYY');

export default brithdayStringToDate;
