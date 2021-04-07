import * as yup from 'yup';

import { emailValidation } from '../validationRules/email.validation';
import { passwordConfirmValidation } from '../validationRules/passwordConfirm.validation';
import { passwordValidation } from '../validationRules/password.validation';

export const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation(6),
  passwordConfirm: passwordConfirmValidation('password'),
});
