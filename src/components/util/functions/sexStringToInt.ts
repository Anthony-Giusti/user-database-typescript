const sexStringToInt = (sex: 'M' | 'F' | 'NB'): 1 | 2 | 3 => {
  switch (sex) {
    case 'M':
      return 1;
    case 'F':
      return 2;
    default:
      return 3;
  }
};

export default sexStringToInt;
