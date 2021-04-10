import { createNotifierAction } from '../notifier/notifier.actions';
import { Dispatch } from 'redux';
import { setAllTasksAction } from './tasks.actions';
import { Tasks } from '../../types/tasks.type';
import { URLS_API } from '../../constants/urlsApi';

export const getAllTasksThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(URLS_API['api/tasks/all']);
      const tasks: Tasks = await response.json();
      dispatch(setAllTasksAction(tasks));
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
};
