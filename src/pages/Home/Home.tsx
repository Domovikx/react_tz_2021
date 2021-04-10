import * as React from 'react';
import { Box } from '@material-ui/core';
import { getAllTasksThunk } from '../../store/tasks/tasks.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useStyles } from './Home.styles';
import { RootState } from '../../store/root.reducer';

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    !tasks.length && dispatch(getAllTasksThunk());
  }, [tasks]);

  return <Box>Home</Box>;
};
