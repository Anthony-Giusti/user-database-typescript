const sexIntToString = (sex: 1 | 2 | 3): 'M' | 'F' | 'NB' => {
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
