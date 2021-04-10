import { TASKS, TasksAction } from './tasks.types';
import { Tasks } from '../../types/tasks.type';

export const setAllTasksAction = (tasks: Tasks): TasksAction => {
  return {
    payload: tasks,
    type: TASKS.SET_ALL,
  };
};
