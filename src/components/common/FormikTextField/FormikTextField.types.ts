import { TextFieldProps } from '@material-ui/core';

export type Props = {
  formikkey: string;
  label?: string;
  type?: string;
} & TextFieldProps;
