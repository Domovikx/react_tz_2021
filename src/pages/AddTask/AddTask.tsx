import * as React from 'react';
import ButtonGoBack from '../../components/common/ButtonGoBack';
import FormTask from '../../components/common/FormTask';
import { Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './AddTask.styles';

export const AddTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container className={classes.container}>
      <ButtonGoBack />

      <Typography variant="h6" component="h2">
        AddTask
      </Typography>

      <FormTask />
    </Container>
  );
};
