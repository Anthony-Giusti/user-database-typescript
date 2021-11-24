import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './Styles';

import UserForm from '../UserForm/UserForm';

import { IUser, closeEditModal } from '../../shared/interfaces/User.interface';

interface IProps {
  editModalOpen: boolean;
  closeEditModal: closeEditModal;
  selectedUser: IUser;
}

const EditModal: React.FC<IProps> = ({
  editModalOpen,
  closeEditModal,
  selectedUser,
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const [editModalConfirmOpen, setEditModalConfirmOpen] = useState(false);

  const ref = useRef(document.createElement('form'));

  const classes = useStyles();
  const theme = useTheme();

  const mdDevice = useMediaQuery(theme.breakpoints.up('md'));

  const discardEdits = () => {
    setEditModalConfirmOpen(false);
    setIsEdited(false);
    closeEditModal('discard', null);
  };

  const cancelEdits = () => {
    setEditModalConfirmOpen(false);
  };

  const handleModalClose = () => {
    if (isEdited) {
      setEditModalConfirmOpen(true);
    } else {
      closeEditModal('discard', null);
    }
  };

  const editMade = () => {
    if (!isEdited) {
      setIsEdited(true);
    }
  };

  const handleSubmit = (editedUser: IUser) => {
    setEditModalConfirmOpen(false);
    setIsEdited(false);
    closeEditModal('submit', editedUser);
  };

  const confirmEdits = () => {
    if (ref.current) {
      ref.current.sendForm();
    }
  };

  return (
    <>
      <Dialog open={editModalOpen} onClose={handleModalClose} fullWidth>
        <div className={classes.title}>
          <Typography variant="h2">Edit User</Typography>
          <Typography gutterBottom variant="caption">
            ID: {selectedUser._id}
          </Typography>
        </div>

        <DialogContent>
          <div>
            <span className={classes.dateBox}>
              <Typography className={classes.dateTitle}>
                Date Created:
              </Typography>
              <Typography className={classes.date}>
                {selectedUser.created}
              </Typography>
            </span>
            <Divider />
            <span className={classes.dateBox}>
              <Typography className={classes.dateTitle}>
                Last Edited:
              </Typography>
              <Typography className={classes.date}>
                {selectedUser.lastEdit}
              </Typography>
            </span>
          </div>

          <Divider />

          <UserForm
            submit={handleSubmit}
            user={selectedUser}
            editMade={editMade}
            ref={ref}
          />
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            // className={classes.negitiveBtn}
            color="primary"
            onClick={() => ref.current.sendForm()}
            disabled={!isEdited}
          >
            Confirm Edits
          </Button>
          <Button
            // className={classes.negitiveBtn}
            onClick={() => closeEditModal('discard', null)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editModalConfirmOpen}>
        <DialogContent>
          <Typography>Confirm edits before closing?</Typography>
          <DialogActions
            disableSpacing={!mdDevice}
            className={classes.confirmDialogBtnsContainer}
          >
            <Button
              className={classes.confirmDialogBtn}
              variant="contained"
              startIcon={<CheckIcon />}
              color="primary"
              onClick={confirmEdits}
            >
              Confirm Edits
            </Button>
            <Button
              className={classes.confirmDialogBtn}
              variant="contained"
              startIcon={<DeleteIcon />}
              color="secondary"
              onClick={discardEdits}
            >
              Discard Edits
            </Button>
            <Button className={classes.confirmDialogBtn} onClick={cancelEdits}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditModal;
