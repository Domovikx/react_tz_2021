import * as yup from 'yup';

export const statusValidation: yup.StringSchema = yup
  .string()
  .required('Введите статус')
  .matches(/^([0-9]|1[0-1])$/i, 'Статус может быть: 0-11');
