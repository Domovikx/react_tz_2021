import FormikTextField from '../FormikTextField';
import React, { useState } from 'react';
import { authLoginThunk } from '../../../store/auth/auth.thunks';
import { InitialValues, LocalState } from './FormTask.types';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { fieldName } from '../../../constants/fieldName';
import { fieldType } from '../../../constants/fieldType';
import { Form, Formik, FormikProps } from 'formik';
import { RootState } from '../../../store/store.types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useStyles } from './FormTask.styles';
import { validationSchema } from '../../../validation/validationSchemes/formTask.validationSchema';

export const FormTask = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const classes = useStyles();
  const history = useHistory();

  // if (isAuth) {
  //   history.push(Locations.HomePage);
  // }

  const initialValues: InitialValues = {
    username: '',
    email: '',
    text: '',
    status: 0,
  };

  const submitHandler = (formValues: InitialValues) => {
    console.log('submitHandler :>> ');
    // dispatch(authLoginThunk(formValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(v) => submitHandler(v)}
    >
      {(props: FormikProps<InitialValues>) => {
        const { isValid, dirty } = props;

        return (
          <Form className={classes.form}>
            <Container
              component="main"
              maxWidth="xs"
              className={classes.container}
            >
              <div className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.username}
                      type={fieldType.text}
                      label="Username"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.email}
                      type={fieldType.text}
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.taskText}
                      type={fieldType.text}
                      label="Task text"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.status}
                      type={fieldType.number}
                      label="Stats"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type={fieldType.submit}
                      disabled={!isValid || !dirty}
                      fullWidth
                      size="large"
                      color="primary"
                      variant="contained"
                      className={classes.submit}
                    >
                      Сохранить
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
