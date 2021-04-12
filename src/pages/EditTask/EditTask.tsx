import * as React from 'react';
import ButtonGoBack from '../../components/common/ButtonGoBack';
import FormTask from '../../components/common/FormTask';
import { Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useStyles } from './EditTask.styles';

interface Params {
  id: string;
}

export const EditTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id }: Params = useParams();
  console.log('id :>> ', id);

  return (
    <Container className={classes.container}>
      <ButtonGoBack />

      <Typography variant="h6" component="h2">
        EditTask
      </Typography>

      <FormTask />
    </Container>
  );
};
