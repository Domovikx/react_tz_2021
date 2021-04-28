import * as yup from 'yup';
import { emailValidation } from '../validationRules/email.validation';
import { statusValidation } from '../validationRules/status.validation';
import { taskTextValidation } from '../validationRules/taskText.validation';
import { usernameValidation } from '../validationRules/username.validation';

export const validationSchema = yup.object({
  email: emailValidation,
  username: usernameValidation,
  text: taskTextValidation,
  status: statusValidation,
});
