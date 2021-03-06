import * as yup from 'yup';

export const passwordValidation = (minLength: number): yup.StringSchema =>
  yup
    .string()
    .required('Введите ваш password')
    .min(minLength, `Ваш пароль должен быть минимум ${minLength} символов`);
