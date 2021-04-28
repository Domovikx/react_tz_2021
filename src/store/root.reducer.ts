import { authReducer } from './auth/auth.reducer';
import { combineReducers } from 'redux';
import { notifierReducer } from './notifier/notifier.reducer';
import { tasksReducer } from './tasks/tasks.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  notifier: notifierReducer,
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
