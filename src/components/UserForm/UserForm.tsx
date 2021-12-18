import React, { useState, forwardRef, useImperativeHandle } from 'react';

import { FormControl, MenuItem, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import isAlpha from 'validator/es/lib/isAlpha';
import DateFnsUtils from '@date-io/date-fns';

import BirthdayPicker from '../BirthdayPicker/BirthdayPicker';
import brithdayDateToString from '../util/functions/birthdayDateToString';
import brithdayStringToDate from '../util/functions/birthdayStringToDate';
import createDateAndTimeString from '../util/functions/createDateAndTimeString';
import sexIntToString from '../util/functions/sexIntToString';
import sexStringToInt from '../util/functions/sexStringToInt';

import useStyles from './Styles';
import { IUser } from '../../shared/interfaces/User.interface';

interface IProps {
  user: IUser | null;
  editMade: (() => void) | null;
  submit: (user: IUser) => void;
}

const sexInt = [1, 2, 3] as const;
type sexInt = (typeof sexInt)[number];
const isSexInt = (x: any): x is sexInt => sexInt.includes(x);

const UserForm = forwardRef((props: IProps, ref) => {
  const [userSex, setUserSex] = useState<sexInt>(
    props.user ? sexStringToInt(props.user.sex) : 3
  );
  const [userBirthday, setUserBirthday] = useState(
    props.user ? brithdayStringToDate(props.user.birthday) : new Date()
  );
  const classes = useStyles();

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  let firstNameField: HTMLTextAreaElement;
  let lastNameField: HTMLTextAreaElement;

  const userSexChange = (sex: string) => {
    const newSexInt = parseInt(sex);
    if (isSexInt(newSexInt)) {
      setUserSex(newSexInt);

      if (props.editMade) {
        props.editMade();
      }}
  };

   const userBirthdayChange = (newBirthday: Date) => {
      setUserBirthday(newBirthday);
  
      if (props.editMade) {
        props.editMade();
      }
    }

  const validateForm = () => {
    let errorsFound = false;

    if (!isAlpha(firstNameField.value)) {
      setFirstNameError(true);
      errorsFound = true;
    } else {
      setFirstNameError(false);
    }

    if (!isAlpha(lastNameField.value)) {
      setLastNameError(true);
      errorsFound = true;
    } else {
      setLastNameError(false);
    }

    const now = createDateAndTimeString();

    if (!errorsFound) {
      const editedUser: IUser = {
        _id: props.user ? props.user._id : '',
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        sex: sexIntToString(userSex),
        birthday: brithdayDateToString(userBirthday),
        created: props.user ? props.user.created : now,
        lastEdit: now,
      };

      props.submit(editedUser);
    }
  };

  useImperativeHandle(ref, () => ({
    sendForm() {
      validateForm();
    },
  }));

  return (
    <>
      <div className={classes.userFields}>
        <TextField
          variant="outlined"
          error={firstNameError}
          onChange={props.editMade ? props.editMade : undefined}
          label="First Name"
          helperText={firstNameError ? 'Must contain only letters' : ''}
          defaultValue={props.user ? props.user.firstName : ''}
          inputRef={(ref) => {
            firstNameField = ref;
          }}
        />

        <TextField
          variant="outlined"
          error={lastNameError}
          onChange={props.editMade ? props.editMade : undefined}
          label="Last Name"
          helperText={lastNameError ? 'Must contain only letters' : ''}
          defaultValue={props.user ? props.user.lastName : ''}
          inputRef={(ref) => {
            lastNameField = ref;
          }}
        />

        <FormControl>
          <TextField
            label="Sex"
            variant="outlined"
            onChange={(e) => userSexChange(e.target.value)}
            value={userSex}
            select
          >
            <MenuItem value={1}>M</MenuItem>
            <MenuItem value={2}>F</MenuItem>
            <MenuItem value={3}>NB</MenuItem>
          </TextField>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <BirthdayPicker
            userBirthday={userBirthday}
            userBirthdayChange={userBirthdayChange}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
});

UserForm.displayName = 'UserForm';

export default UserForm;
