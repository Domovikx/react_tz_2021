import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

import { Props } from './FormikTextField.types';

export const FormikTextField = (props: Props) => {
  const { formikkey, type, label } = props;
  const [field, meta] = useField(formikkey);

  return (
    <TextField
      name={field.name}
      type={type}
      label={label}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      helperText={(meta.touched && meta.error) || ' '}
      error={meta.touched && Boolean(meta.error)}
      fullWidth
      {...props}
    />
  );
};
