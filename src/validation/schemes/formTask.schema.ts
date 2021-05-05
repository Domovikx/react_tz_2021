import * as yup from 'yup';
import { emailValidation } from '../rules/email.rule';
import { statusValidation } from '../rules/status.rule';
import { taskTextValidation } from '../rules/taskText.rule';
import { usernameValidation } from '../rules/username.rule';

export const validationSchema = yup.object({
  email: emailValidation({ required: true }),
  username: usernameValidation,
  text: taskTextValidation,
  status: statusValidation,
});
