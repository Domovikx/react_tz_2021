import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: 'static',
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    marginLeft: 'auto',
  },
  email: {
    color: theme.palette.text.primary,
  },
}));
