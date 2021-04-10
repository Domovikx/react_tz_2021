import { AUTH, AuthAction, AuthState } from './auth.types';

export const authState: AuthState = {
  isAuth: false,
};

export const authReducer = (
  state: AuthState = authState,
  { type }: AuthAction,
): AuthState => {
  let newState;

  switch (type) {
    case AUTH.LOGIN: {
      newState = { ...state, isAuth: true };
      return newState;
    }

    case AUTH.LOGOUT: {
      newState = { ...state, isAuth: false };
      return newState;
    }

    default:
      return state;
  }
};
