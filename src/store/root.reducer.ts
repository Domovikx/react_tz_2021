import { authReducer } from './auth/auth.reducer';
import { combineReducers } from 'redux';
import { notifierReducer } from './notifier/notifier.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  notifier: notifierReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
