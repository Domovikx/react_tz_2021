import * as React from 'react';
import ButtonGoBack from '../../components/common/ButtonGoBack';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './AddTask.styles';

export const AddTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container className={classes.container}>
      AddTask <ButtonGoBack />
    </Container>
  );
};
