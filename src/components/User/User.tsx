import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { useTheme } from '@material-ui/core/styles';
import useStyles from './Styles';

import { IUser } from '../../shared/interfaces/User.interface';

interface IProps {
  user: IUser;
  openEditModal: (user: IUser) => void;
  handleRemoveUser: (user: IUser) => void;
}

const User: React.FC<IProps> = ({ user, openEditModal, handleRemoveUser }) => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
    null
  );

  const classes = useStyles();
  const theme = useTheme();
  const mdDevice = useMediaQuery(theme.breakpoints.up('md'));
  const smDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandedMenuOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleExpandedMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card elevation={1} className={classes.userMain}>
      <CardContent className={classes.userInfo}>
        <span className={`${classes.infoCell} ${classes.name}`}>
          <Typography className={classes.userText}>{user.firstName}</Typography>
        </span>

        <Divider orientation="vertical" flexItem />

        <span className={`${classes.infoCell} ${classes.name}`}>
          <Typography className={classes.userText}>{user.lastName}</Typography>
        </span>

        <Divider orientation="vertical" flexItem />

        <span className={`${classes.infoCell} ${classes.sex}`}>
          <Typography>{user.sex}</Typography>
        </span>

        <Divider orientation="vertical" flexItem />

        <span className={`${classes.infoCell} ${classes.birthday}`}>
          <Typography>{user.birthday}</Typography>
        </span>
      </CardContent>

      <Divider orientation="vertical" flexItem />

      <CardActions className={classes.userButtons}>
        {mdDevice && (
          <>
            <IconButton size="small" onClick={() => openEditModal(user)}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => handleRemoveUser(user)}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
        {smDevice && (
          <>
            <IconButton onClick={handleExpandedMenuOpen} size="small">
              <MoreVertIcon />
            </IconButton>
          </>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleExpandedMenuClose}
        >
          <MenuItem>
            <Button
              startIcon={<EditIcon />}
              size="small"
              onClick={() => handleRemoveUser(user)}
            >
              Delete User
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              startIcon={<DeleteIcon />}
              size="small"
              onClick={() => openEditModal(user)}
            >
              Edit User
            </Button>
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
};

export default User;
