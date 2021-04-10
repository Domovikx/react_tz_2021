import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: '30px',
    width: '30px',
  },

  iconButton: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
}));
