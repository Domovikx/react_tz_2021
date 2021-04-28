import React from 'react';
import { Container } from '@material-ui/core';
import { Props } from './AuthLayout.types';

export const AuthLayout = ({ children }: Props) => (
  <Container>{children}</Container>
);
