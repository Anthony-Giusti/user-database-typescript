
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import useStyles from './Styles';
import brithdayStringToDate from '../../../../components/util/functions/birthdayStringToDate';

import IUser from '../../../../shared/interfaces/User.interface';

interface IProps {
  handleSexFilter: (newSex: string) => void;
  sexFilter: string[];
  userData: IUser[];
}

const UsersHeaderTools: React.FC<IProps> = ({ handleSexFilter, sexFilter, userData }) => {
  const handleChange = (e: React.FormEvent) => {
    handleSexFilter(e.target.value);
  };

  const handleGetAverage = () => {
    const now = new Date();

    const birthdaysInDays = userData.map((user) => {
      const diffTime = Math.abs(now - brithdayStringToDate(user.birthday));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
    });

    const sum = birthdaysInDays.reduce((a, b) => a + b, 0);
    return Math.round(sum / birthdaysInDays.length / 365);
  };

  const classes = useStyles();

  return (
    <div className={classes.toolsMain}>
      <div className={classes.toolsSection}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Only Include</FormLabel>
          <FormGroup>
            <FormControlLabel
              onChange={handleChange}
              control={<Checkbox name="male" />}
              value="M"
              label="Male"
              checked={sexFilter.includes('M')}
            />
            <FormControlLabel
              control={<Checkbox name="female" />}
              onChange={handleChange}
              value="F"
              label="Female"
              checked={sexFilter.includes('F')}
            />
            <FormControlLabel
              control={<Checkbox name="non-binary" />}
              onChange={handleChange}
              value="NB"
              label="Non-Binary"
              checked={sexFilter.includes('NB')}
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.toolsSection}>
        <Typography>Average User Age:</Typography>
        <Typography>{handleGetAverage()}</Typography>
      </div>
    </div>
  );
};

// UsersHeaderTools.propTypes = {
//   handleSexFilter: PropTypes.func,
//   sexFilter: PropTypes.array,
//   userData: PropTypes.array,
// };

export default UsersHeaderTools;
