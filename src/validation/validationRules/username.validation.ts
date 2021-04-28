import * as yup from 'yup';

export const usernameValidation: yup.StringSchema = yup
  .string()
  .required('Введите текст')
  .matches(/^[a-z0-9\_\-]+$/i, 'Нужен английский язык, или цифры');
