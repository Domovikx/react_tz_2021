import { NOTIFIER, NotifierAction, NotifierState } from './notifier.types';

export const notifierState: NotifierState = {
  message: '',
  variant: 'default',
};

export const notifierReducer = (
  state = notifierState,
  { type, payload }: NotifierAction,
): NotifierState => {
  switch (type) {
    case NOTIFIER.CREATE:
      return {
        message: payload.message,
        variant: payload.variant,
      };
    default:
      return state;
  }
};
