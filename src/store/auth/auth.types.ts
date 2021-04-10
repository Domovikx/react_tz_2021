export interface AuthState {
  isAuth: boolean;
}

export enum AUTH {
  LOGIN = 'AUTH.LOGIN',
  LOGOUT = 'AUTH.LOGOUT',
}

export interface AuthLoginPayload {
  email: string;
  password: string;
}

export interface AuthRegisterArgs {
  payload: AuthLoginPayload;
  type: AUTH;
}

export type AuthAction =
  | { type: AUTH.LOGIN; payload: any }
  | { type: AUTH.LOGOUT; payload: any };
