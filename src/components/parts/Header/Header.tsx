import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Locations } from '../../../constants/locations';
import { useStyles } from './Header.styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Button
          className={classes.loginButton}
          component={Link}
          to={Locations.Auth_Authentication}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
