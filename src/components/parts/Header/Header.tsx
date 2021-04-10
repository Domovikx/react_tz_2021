import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useStyles } from './Header.styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Button className={classes.loginButton}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};
