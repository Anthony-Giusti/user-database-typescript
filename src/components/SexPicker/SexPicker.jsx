import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import sexStringToInt from '../util/functions/sexStringToInt';

const SexPicker = ({ userSex, changeUserSex }) => (
  <FormControl>
    <InputLabel>Sex</InputLabel>
    <Select onChange={changeUserSex} defaultValue={sexStringToInt(userSex)}>
      <MenuItem value={1}>M</MenuItem>
      <MenuItem value={2}>F</MenuItem>
      <MenuItem value={3}>NB</MenuItem>
    </Select>
  </FormControl>
);

SexPicker.propTypes = {
  userSex: PropTypes.string,
  changeUserSex: PropTypes.func,
};

export default SexPicker;
