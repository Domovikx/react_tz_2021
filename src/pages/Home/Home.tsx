import * as React from 'react';
import { Box } from '@material-ui/core';
import { getAllTasksThunk } from '../../store/tasks/tasks.thunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useStyles } from './Home.styles';

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksThunk());
  }, []);

  return <Box>Home</Box>;
};
