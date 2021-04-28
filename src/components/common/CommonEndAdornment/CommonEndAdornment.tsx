import * as React from 'react';
import { InputAdornment } from '@material-ui/core';
import { Props } from './CommonEndAdornment.types';
import {
  VisibilityIcon,
  VisibilityOffIcon,
  IconButton,
} from '../../../assets/Icons';

export const CommonEndAdornment = ({ handleClick, showPassword }: Props) => (
  <InputAdornment position="end">
    <IconButton aria-label="toggle password visibility" onClick={handleClick}>
      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  </InputAdornment>
);
