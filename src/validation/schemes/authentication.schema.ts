import * as yup from 'yup';
import { PASSWORD_MIN_LENGTH } from '../../constants/auth';
import { emailRule } from '../rules/email.rule';
import { passwordRule } from '../rules/password.rule';

export const authenticationSchema = yup.object({
  email: emailRule({ required: true }),
  password: passwordRule(PASSWORD_MIN_LENGTH),
});
