import { Message, NOTIFIER, NotifierAction, Variant } from './notifier.types';

export const createNotifierAction = (
  message: Message,
  variant: Variant,
): NotifierAction => ({
  payload: { message, variant },
  type: NOTIFIER.CREATE,
});
