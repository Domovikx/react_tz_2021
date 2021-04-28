import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  content: {
    flex: '1 0 auto',
  },

  footer: {
    flexShrink: 0,
  },
}));
