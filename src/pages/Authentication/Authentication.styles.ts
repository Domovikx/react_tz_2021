import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
  },
  container: {
    paddingTop: theme.spacing(8),
  },
  link: {
    textTransform: 'initial',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  successIcon: {
    backgroundColor: theme.palette.success.light,
    margin: theme.spacing(1),
  },
  typography: {
    marginBottom: theme.spacing(3),
  },
  errorIcon: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(1),
  },
}));
