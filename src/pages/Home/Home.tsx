import * as React from 'react';
import TaskTable from '../../components/common/TaskTable';
import { Box, Container } from '@material-ui/core';
import { getAllTasksThunk } from '../../store/tasks/tasks.thunks';
import { RootState } from '../../store/root.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useStyles } from './Home.styles';

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    !tasks.length && dispatch(getAllTasksThunk());
  }, []);

  return (
    <Container className={classes.container}>
      <TaskTable />
    </Container>
  );
};
