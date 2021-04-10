import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'div#root': {
          height: '100vh',
        },
      },
    },
  },

  palette: {
    type: 'light',
    primary: {
      main: '#ffa726',
      contrastText: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
    },
  },
});
