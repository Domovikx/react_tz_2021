import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { RootState } from '../../../store/store.types';
import { NotifierState } from '../../../store/notifier/notifier.types';

export const Notifier = (): null => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const notification: NotifierState = useSelector(
    (store: RootState) => store.notifier,
  );

  const { message, variant } = notification;
  if (!message) return null;

  const key = enqueueSnackbar(message, {
    onClick: () => {
      closeSnackbar(key);
    },
    variant,
  });

  return null;
};
