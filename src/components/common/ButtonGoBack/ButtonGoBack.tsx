import * as React from 'react';
import { useHistory } from 'react-router';
import { useStyles } from './ButtonGoBack.styles';
import {
  ArrowLeftBoldCircleOutlineIcon,
  IconButton,
} from '../../../assets/Icons';

export const ButtonGoBack = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <IconButton
      className={classes.iconButton}
      onClick={() => {
        history.goBack();
      }}
    >
      <ArrowLeftBoldCircleOutlineIcon className={classes.icon} />
    </IconButton>
  );
};
