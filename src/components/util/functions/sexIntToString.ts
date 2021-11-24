const sexIntToString = (sex: number): string => {
  switch (sex) {
    case 1:
      return 'M';
    case 2:
      return 'F';
    default:
      return 'NB';
  }
};

export default sexIntToString;
