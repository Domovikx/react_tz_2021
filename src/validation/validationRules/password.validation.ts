import * as yup from 'yup';

export const passwordValidation = (minLength = 3): yup.StringSchema =>
  yup
    .string()
    .required('Введите ваш password')
    .min(minLength, `Ваш пароль должен быть минимум ${minLength} символов`);
