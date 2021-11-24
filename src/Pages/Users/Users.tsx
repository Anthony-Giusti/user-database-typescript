import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

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
}

const Users: React.FC<IProps> = ({
  userData,
  removeUser,
  submitEditedUser,
  fetchUserData,
}) => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [sexFilter, setSexFilter] = useState<string[]>([]);
  const [visibleUserData, setVisibleUserData] = useState<IUser[]>([]);
  const [currentSort, setCurrentSort] = useState<{
    property: userProperty;
    order: listOrder;
  }>({
    property: '_id',
    order: 'ascending',
  });

  const classes = useStyles();

  const openEditModal = (user: IUser) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const closeEditModal: closeEditModal = (action, editedUser) => {
    if (action === 'submit' && editedUser) {
      submitEditedUser(editedUser);
    }
    setEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleSexFilter = (newSex: string) => {
    if (sexFilter.includes(newSex)) {
      setSexFilter((prev) => prev.filter((sex) => sex !== newSex));
    } else {
      setSexFilter((prev) => [...prev, newSex]);
    }
  };

  const filterUsers = (users: IUser[]) => {
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

  const sortByBirthday = (users: IUser[], order: string) => {
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
  ) => {
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

  const handleSortUsers = (order: listOrder, list: userProperty) => {
    let sortedUsers = [...userData];

    if (list === 'birthday') {
      sortedUsers = sortByBirthday(sortedUsers, order);
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

  const confirmRemoveUser = (user: IUser) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleRemoveUser = () => {
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
    handleSortUsers(currentSort.order, currentSort.property);
  }, [userData, sexFilter]);

  return (
    <div className={classes.usersMain}>
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
    </div>
  );
};

export default Users;
