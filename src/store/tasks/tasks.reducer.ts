import { TASKS, TasksAction, TasksState } from './tasks.types';

export const tasksState: TasksState = {
  tasks: [],
};

export const tasksReducer = (
  state: TasksState = tasksState,
  action: TasksAction,
) => {
  switch (action.type) {
    case TASKS.SET_ALL: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    default:
      return state;
  }
};
