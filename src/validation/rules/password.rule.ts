import * as yup from 'yup';

interface Props {
  required?: boolean;
  minLength: number;
}

export const passwordRule = (props: Props): yup.StringSchema => {
  let rule = yup.string();
  if (props.required) {
    rule = rule.required('Введите ваш password');
  }
  rule = rule.min(
    props.minLength,
    `Ваш пароль должен быть минимум ${props.minLength} символов`,
  );
  return rule;
};
