export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  sex: string;
  birthday: string;
  created: string;
  lastEdit: string;
}

export type userProperty =
  | '_id'
  | 'firstName'
  | 'lastName'
  | 'sex'
  | 'birthday';

export type listOrder = 'ascending' | 'descending';

export type closeEditModal = (
  action: 'submit' | 'discard',
  editedUser: IUser | null
) => void;
