import * as yup from 'yup';

export const emailValidation: yup.StringSchema = yup
  .string()
  .required('Введите email')
  .email('Введите правильный email');
