import Footer from '../../parts/Footer';
import Header from '../../parts/Header';
import React from 'react';
import { Box } from '@material-ui/core';
import { Props } from './MainLayout.types';
import { useStyles } from './MainLayout.styles';

export const MainLayout = ({ children }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Header />
        <Box>{children}</Box>
      </Box>

      <Footer className={classes.footer} />
    </Box>
  );
};
