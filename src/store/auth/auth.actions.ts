import { AUTH } from './auth.types';

export const authLogoutAction = () => ({
  payload: false,
  type: AUTH.LOGOUT,
});

export const authLoginAction = () => ({
  payload: true,
  type: AUTH.LOGIN,
});
