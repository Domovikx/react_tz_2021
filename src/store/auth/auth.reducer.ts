import { AUTH, AuthAction, AuthState } from './auth.types';

export const authState: AuthState = {
  isAuth: false,
  token: '',
  email: '',
};

export const authReducer = (
  state: AuthState = authState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTH.LOGIN: {
      return {
        ...state,
        isAuth: action.payload.isAuth,
        token: action.payload.token,
        email: action.payload.email,
      };
    }

    case AUTH.LOGOUT: {
      return { ...state, isAuth: false, token: '', email: '' };
    }

    default:
      return state;
  }
};
