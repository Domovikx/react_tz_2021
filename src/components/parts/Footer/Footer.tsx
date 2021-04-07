import * as React from 'react';
import { Box } from '@material-ui/core';
import { Props } from './Footer.types';
import { useStyles } from './Footer.styles';

export const Footer = (props: Props): JSX.Element => {
  const classes = useStyles();

  return <Box>Footer</Box>;
};
