import { CreateNewTaskPayload, CreateNewTaskResponse } from './tasks.types';
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

export const createNewTaskThunk = (task: CreateNewTaskPayload) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(URLS_API['api/tasks/create'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ task }),
      });
      const result: CreateNewTaskResponse = await response.json();
      console.log('result :>> ', result);

      if (result.success === false) {
        dispatch(createNotifierAction(result.message, 'warning'));
        return;
      }

      dispatch(createNotifierAction('Вы успешно создали новый таск', 'info'));
      dispatch(setAllTasksAction([]));
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
};
