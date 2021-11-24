import React, { useRef, forwardRef } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles';
import UserForm from '../../components/UserForm/UserForm';

import { IUser } from '../../shared/interfaces/User.interface';

interface IProps {
  submitUser: (newUser: IUser) => void;
}

const CreateUser: React.FC<IProps> = ({ submitUser }) => {
  const classes = useStyles();
  // const ref = useRef(null);
  const ref = useRef(document.createElement('form'));

  const handleSubmit = (newUser: IUser) => {
    submitUser(newUser);
  };

  return (
    <div>
      <Typography variant="h2">New User</Typography>
      <div className={classes.userFormContainer}>
        <UserForm user={null} editMade={null} submit={handleSubmit} ref={ref} />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => ref.current.sendForm()}
      >
        Submit New User
      </Button>
    </div>
  );
};

export default CreateUser;
