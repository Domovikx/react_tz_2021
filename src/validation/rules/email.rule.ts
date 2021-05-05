import * as yup from 'yup';

interface Props {
  required?: boolean;
}

export const emailRule = (props: Props): yup.StringSchema => {
  let rule = yup.string();
  if (props.required) {
    rule = rule.required('Введите email');
  }
  rule = rule.email('Введите правильный email');
  rule = rule.max(10);
  rule = rule.min(2);
  return rule;
};
