import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import 'date-fns';

import useStyles from './Styles';
import User from '../../components/User/User';
import EditModal from '../../components/EditModal/EditModal';
import UsersHeader from './UsersHeader/UsersHeader';
import brithdayStringToDate from '../../components/util/functions/birthdayStringToDate';

import {
  IUser,
  userProperty,
  listOrder,
  closeEditModal,
} from '../../shared/interfaces/User.interface';

interface IProps {
  userData: IUser[];
  removeUser: (userId: string) => void;
  submitEditedUser: (editedUser: IUser) => void;
  fetchUserData: () => void;
  isFetchingUserData: boolean;
}

const Users: React.FC<IProps> = ({
  userData,
  removeUser,
  submitEditedUser,
  fetchUserData,
  isFetchingUserData,
}) => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [sexFilter, setSexFilter] = useState<string[]>([]);
  const [visibleUserData, setVisibleUserData] = useState<IUser[]>([]);
  const [currentSort, setCurrentSort] = useState<{
    property: userProperty;
    order: listOrder;
  }>({
    property: '_id',
    order: 'ascending',
  });
  const [isLoadingSnackBarOpen, setIsLoadingSnackbarOpen] =
    useState<boolean>(false);

  const classes = useStyles();

  const waitOnServer = (): void => {
    setTimeout(() => {
      if (isFetchingUserData && userData.length < 1) {
        setIsLoadingSnackbarOpen(true);
      }
    }, 2000);
  };

  const handleLoadingSnackBarClose = () => {
    setIsLoadingSnackbarOpen(false);
  };

  const openEditModal = (user: IUser): void => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const closeEditModal: closeEditModal = (action, editedUser): void => {
    if (action === 'submit' && editedUser) {
      submitEditedUser(editedUser);
    }
    setEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleSexFilter = (newSex: string): void => {
    if (sexFilter.includes(newSex)) {
      setSexFilter((prev) => prev.filter((sex) => sex !== newSex));
    } else {
      setSexFilter((prev) => [...prev, newSex]);
    }
  };

  const filterUsers = (users: IUser[]): IUser[] => {
    const filteredUsers: IUser[] = [];

    users.forEach((user) => {
      for (let x = 0; x < sexFilter.length; x += 1) {
        if (user.sex === sexFilter[x]) {
          filteredUsers.push(user);
          break;
        }
      }
    });

    return filteredUsers;
  };

  const sortByBirthday = (order: listOrder): IUser[] => {
    const filteredUsers = [...userData];

    if (order === 'descending') {
      filteredUsers.sort((a, b) =>
        brithdayStringToDate(a.birthday) > brithdayStringToDate(b.birthday)
          ? 1
          : -1
      );
    } else if (order === 'ascending') {
      filteredUsers.sort((a, b) =>
        brithdayStringToDate(a.birthday) < brithdayStringToDate(b.birthday)
          ? 1
          : -1
      );
    }

    return filteredUsers;
  };

  const sortUsers = (
    users: IUser[],
    order: listOrder,
    listItem: userProperty
  ): IUser[] => {
    const filteredUsers = users;

    if (order === 'descending') {
      filteredUsers.sort((a, b) =>
        a[listItem as keyof IUser].toLowerCase() >
        b[listItem as keyof IUser].toLowerCase()
          ? 1
          : -1
      );
    }

    if (order === 'ascending') {
      filteredUsers.sort((a, b) =>
        a[listItem as keyof IUser].toLowerCase() <
        b[listItem as keyof IUser].toLowerCase()
          ? 1
          : -1
      );
    }

    return filteredUsers;
  };

  const handleSortUsers = (order: listOrder, list: userProperty): void => {
    let sortedUsers = [...userData];

    if (list === 'birthday') {
      sortedUsers = sortByBirthday(order);
    } else {
      sortedUsers = sortUsers(sortedUsers, order, list);
    }

    setCurrentSort({ property: list, order });

    if (sexFilter.length > 0) {
      setVisibleUserData(filterUsers(sortedUsers));
    } else {
      setVisibleUserData(sortedUsers);
    }
  };

  const confirmRemoveUser = (user: IUser): void => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleRemoveUser = (): void => {
    if (selectedUser && selectedUser._id) {
      removeUser(selectedUser._id);
      setSelectedUser(null);
      setDeleteDialogOpen(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (!isFetchingUserData) {
      setIsLoadingSnackbarOpen(false);
    } else {
      waitOnServer();
    }
  }, [isFetchingUserData]);

  useEffect(() => {
    handleSortUsers(currentSort.order, currentSort.property);
  }, [userData, sexFilter]);

  return (
    <div className={classes.usersMain}>
      {isFetchingUserData ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <UsersHeader
            handleSexFilter={handleSexFilter}
            sortUsers={handleSortUsers}
            userData={visibleUserData}
            sexFilter={sexFilter}
          />

          {visibleUserData.map((user) => (
            <User
              key={user._id}
              user={user}
              handleRemoveUser={confirmRemoveUser}
              openEditModal={openEditModal}
            />
          ))}
        </>
      )}
      {selectedUser && editModalOpen && (
        <EditModal
          editModalOpen={editModalOpen}
          closeEditModal={closeEditModal}
          selectedUser={selectedUser}
        />
      )}

      {selectedUser && (
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>
            Confirm deletion of user {selectedUser.firstName}{' '}
            {selectedUser.lastName}?
          </DialogTitle>
          <DialogActions>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              color="secondary"
              onClick={() => handleRemoveUser()}
            >
              Confirm Delete
            </Button>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}

      <SnackBar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        // onClose={() => setIsLoadingSnackbarOpen(false)}
        open={isLoadingSnackBarOpen}
        message="Warming up heroku server after long period of inactivity..."
        action={
          <React.Fragment>
            <IconButton onClick={handleLoadingSnackBarClose}>
              <CloseIcon color="action" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Users;
