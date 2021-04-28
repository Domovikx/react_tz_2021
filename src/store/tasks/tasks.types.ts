import { Tasks } from '../../types/tasks.type';

export interface TasksState {
  tasks: Tasks;
}

export enum TASKS {
  SET_ALL = 'TASKS.SET_ALL',
  CREATE_NEW_TASK = 'TASKS.CREATE_NEW_TASK',
  REMOVE_BY_ID = 'TASKS.REMOVE_BY_ID',
  UPDATE_BY_ID = 'TASKS.UPDATE_BY_ID',
}

export interface CreateNewTaskPayload {
  username: string;
  email: string;
  text: string;
  status: number;
}

export type TasksAction =
  | { type: TASKS.SET_ALL; payload: Tasks }
  | { type: TASKS.REMOVE_BY_ID; payload: string }
  | { type: TASKS.CREATE_NEW_TASK; payload: CreateNewTaskPayload };

export interface CreateNewTaskResponse {
  message: string;
  success: boolean;
}
