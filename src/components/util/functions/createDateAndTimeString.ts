import date from 'date-and-time';

const createDateAndTimeString = (): string =>
  date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');

export default createDateAndTimeString;
