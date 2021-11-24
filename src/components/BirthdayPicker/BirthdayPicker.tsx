import React from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

interface IProps {
  userBirthday: Date;
  userBirthdayChange: (newBirthDay: Date) => void;
}

const BirthdayPicker: React.FC<IProps> = ({
  userBirthday,
  userBirthdayChange,
}) => {
  const handleDateChange = (newBirthday: Date) => {
    userBirthdayChange(newBirthday);
  };

  return (
    <>
      <KeyboardDatePicker
        inputVariant="outlined"
        openTo="year"
        disableToolbar
        variant="dialog"
        format="MM/dd/yyyy"
        maxDate={new Date()}
        value={userBirthday}
        onChange={() => handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </>
  );
};

export default BirthdayPicker;
