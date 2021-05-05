import * as yup from 'yup';

export const statusRule: yup.StringSchema = yup
  .string()
  .matches(/^([0-9]|1[0-1])$/i, 'Статус может быть: 0-11');

export const statusRuleRequired: yup.StringSchema = yup
  .string()
  .required('Введите статус')
  .matches(/^([0-9]|1[0-1])$/i, 'Статус может быть: 0-11');
