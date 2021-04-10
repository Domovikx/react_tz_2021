export interface AuthState {
  isAuth: boolean;
  token: string;
  email: string;
}

export enum AUTH {
  LOGIN = 'AUTH.LOGIN',
  LOGOUT = 'AUTH.LOGOUT',
}

export interface AuthLoginPayload {
  isAuth: boolean;
  token: string;
  email: string;
}

export type AuthAction =
  | { type: AUTH.LOGIN; payload: AuthLoginPayload }
  | { type: AUTH.LOGOUT };

export type JSONResponse = { token?: string; message?: string };
