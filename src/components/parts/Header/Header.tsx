import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { authLogoutAction } from '../../../store/auth/auth.actions';
import { createNotifierAction } from '../../../store/notifier/notifier.actions';
import { Link } from 'react-router-dom';
import { Locations } from '../../../constants/locations';
import { RootState } from 'src/store/store.types';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Header.styles';

export const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.auth.email);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const logout = () => {
    dispatch(authLogoutAction());
    dispatch(createNotifierAction('Вы успешно вышли из системы', 'info'));
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {email && (
          <Typography variant="h6" component="h2" className={classes.email}>
            {email}
          </Typography>
        )}

        <Button
          className={classes.button}
          component={Link}
          to={Locations.AddNewTask}
        >
          Add
        </Button>

        {!isAuth && (
          <Button component={Link} to={Locations.Auth_Authentication}>
            Login
          </Button>
        )}

        {isAuth && <Button onClick={logout}>Logout</Button>}
      </Toolbar>
    </AppBar>
  );
};
