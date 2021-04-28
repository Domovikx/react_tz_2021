import * as React from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import Notifier from './components/common/Notifier';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { lightTheme } from './themes/light.theme';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root.reducer';
import { Routing } from './Routing';
import { SnackbarProvider } from 'notistack';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <MuiThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Provider store={store}>
            <SnackbarProvider
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              maxSnack={3}
              autoHideDuration={10000}
            >
              <Notifier />
              <Routing />
            </SnackbarProvider>
          </Provider>
        </MuiThemeProvider>
      </ErrorBoundary>
    </>
  );
};
