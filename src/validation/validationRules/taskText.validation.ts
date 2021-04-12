import * as yup from 'yup';

export const taskTextValidation: yup.StringSchema = yup
  .string()
  .required('Введите текст')
  .matches(
    /^[a-zа-я\,\.\_\:\- ]+$/i,
    'Нужен только русский или английский язык, без спец.символов.',
  );
