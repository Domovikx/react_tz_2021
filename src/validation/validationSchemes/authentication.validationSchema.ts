import * as yup from 'yup';
import { emailValidation } from '../validationRules/email.validation';
import { PASSWORD_MIN_LENGTH } from '../../constants/auth';
import { passwordValidation } from '../validationRules/password.validation';

export const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation(PASSWORD_MIN_LENGTH),
});
