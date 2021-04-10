import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: { fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' },
      body1: { margin: `15px 0` },
    },
    MuiListItem: {
      root: {
        fontSize: '1rem',
        color: 'rgba(0, 0, 0, 0.7)',
      },
      gutters: {
        padding: 0,
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#004d40',
      contrastText: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
    },
  },
});
