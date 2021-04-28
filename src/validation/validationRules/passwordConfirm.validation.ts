import * as yup from 'yup';

export const passwordConfirmValidation = (ref = 'password'): yup.StringSchema =>
  yup
    .string()
    .required('Это поле обязательно')
    .oneOf([yup.ref(ref)], 'Пароли не совпадают');
