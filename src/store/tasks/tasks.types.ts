import { Tasks } from '../../types/tasks.type';

export interface TasksState {
  tasks: Tasks;
  sorting: string;
  linesPerPage: number;
}

export enum TASKS {
  SET_ALL = 'TASKS.SET_ALL',
  REMOVE_BY_ID = 'TASKS.REMOVE_BY_ID',
  UPDATE_BY_ID = 'TASKS.UPDATE_BY_ID',
}

export type TasksAction =
  | { type: TASKS.SET_ALL; payload: Tasks }
  | { type: TASKS.REMOVE_BY_ID; payload: string };
