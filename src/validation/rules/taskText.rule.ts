import * as yup from 'yup';

export const taskTextRule: yup.StringSchema = yup
  .string()
  .required('Введите текст')
  .matches(
    /^[a-zа-я\,\.\_\:\- ]+$/i,
    'Нужен только русский или английский язык, без спец.символов.',
  );
