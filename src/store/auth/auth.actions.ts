import jwt_decode from 'jwt-decode';
import { AUTH, AuthAction } from './auth.types';

export const authLoginAction = (token: string): AuthAction => {
  const decoded: { email: string } = jwt_decode(token);

  return {
    payload: { isAuth: true, token, email: decoded.email },
    type: AUTH.LOGIN,
  };
};

export const authLogoutAction = (): AuthAction => ({
  type: AUTH.LOGOUT,
});
