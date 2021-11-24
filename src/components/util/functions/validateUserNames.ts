import isAlpha from 'validator/es/lib/isAlpha';

import { IUser } from '../../../shared/interfaces/User.interface';

const validateUserNames = (
  user: IUser
): {
  firstName: boolean;
  lastName: boolean;
} => {
  const errors = {
    firstName: false,
    lastName: false,
  };

  if (!isAlpha(user.firstName)) {
    errors.firstName = true;
  }
  if (!isAlpha(user.lastName)) {
    errors.lastName = true;
  }

  return errors;
};

export default validateUserNames;
