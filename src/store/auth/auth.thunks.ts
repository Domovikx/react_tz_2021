import { authLoginAction } from './auth.actions';
import { createNotifierAction } from '../notifier/notifier.actions';
import { Dispatch } from 'redux';
import { JSONResponse } from './auth.types';
import { URLS_API } from '../../constants/urlsApi';

export const authLoginThunk = (user: { email: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(URLS_API['api/users/login'], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      });

      const json: JSONResponse = await response.json();

      if (json.message) {
        dispatch(createNotifierAction(json.message, 'warning'));
        return;
      }

      if (json.token) {
        dispatch(authLoginAction(json.token));
        dispatch(createNotifierAction('Вы успешно вошли в систему', 'info'));
        return;
      }
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
};
