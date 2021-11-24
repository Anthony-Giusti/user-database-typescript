import React, { useState } from 'react';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import UsersHeaderTools from './UsersHeaderTools/UsersHeaderTools';

import useStyles from './Styles';
import SortButton from '../../../components/SortButton/SortButton';

import {
  IUser,
  userProperty,
  listOrder,
} from '../../../shared/interfaces/User.interface';

interface IProps {
  handleSexFilter: (newSex: string) => void;
  sortUsers: (order: listOrder, list: userProperty) => void;
  userData: IUser[];
  sexFilter: string[];
}

const UsersHeader: React.FC<IProps> = ({
  handleSexFilter,
  sortUsers,
  userData,
  sexFilter,
}) => {
  const [expandedHeader, setExpandedHeader] = useState(false);
  const [selectedSortBtn, setSelectedSortBtn] = useState('_id');

  const classes = useStyles();
  const theme = useTheme();

  const smDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSort = (order: listOrder, list: userProperty) => {
    sortUsers(order, list);

    setSelectedSortBtn(list);
  };

  const handleExpandHeader = () => {
    setExpandedHeader((prev) => !prev);
  };

  return (
    <div className={classes.usersHeaderMain}>
      <div className={classes.usersHeader}>
        <span className={classes.usersDivders}>
          <div className={classes.name}>
            <Typography className={classes.columnName}>First Name</Typography>
            <SortButton
              handleSort={handleSort}
              toBeSorted="firstName"
              selectedSortBtn={selectedSortBtn}
            />
          </div>

          <Divider orientation="vertical" flexItem />

          <div className={classes.name}>
            <Typography className={classes.columnName}>Last Name</Typography>
            <SortButton
              handleSort={handleSort}
              toBeSorted="lastName"
              selectedSortBtn={selectedSortBtn}
            />
          </div>

          <Divider orientation="vertical" flexItem />

          <div className={classes.sex}>
            <Typography className={classes.columnName}>Sex</Typography>
          </div>

          <Divider light orientation="vertical" flexItem />

          <div className={classes.birthday}>
            <Typography className={classes.columnName}>
              {smDevice ? 'Birth Day' : 'Birthday'}
            </Typography>
            <SortButton
              handleSort={handleSort}
              toBeSorted="birthday"
              selectedSortBtn={selectedSortBtn}
            />
          </div>
        </span>

        <Divider orientation="vertical" flexItem />

        <span className={classes.dropDownBtnContainer}>
          <IconButton
            className={classes.dropDownBtn}
            size="small"
            onClick={handleExpandHeader}
          >
            {expandedHeader ? (
              <ExpandLessIcon fontSize={smDevice ? 'medium' : 'large'} />
            ) : (
              <ExpandMoreIcon fontSize={smDevice ? 'medium' : 'large'} />
            )}
          </IconButton>
        </span>
      </div>
      {expandedHeader && (
        <UsersHeaderTools
          handleSexFilter={handleSexFilter}
          userData={userData}
          sexFilter={sexFilter}
        />
      )}
    </div>
  );
};

export default UsersHeader;
