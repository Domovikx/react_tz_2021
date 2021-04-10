import ButtonGoBack from '../../components/common/ButtonGoBack';
import CommonEndAdornment from '../../components/common/CommonEndAdornment';
import FormikTextField from '../../components/common/FormikTextField';
import React, { useState } from 'react';
import { AuthRegisterValues, LocalState } from './Authentication.types';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Form, Formik, FormikProps } from 'formik';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { RootState } from '../../store/store.types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useStyles } from './Authentication.styles';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';

export const Authentication = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const classes = useStyles();
  const history = useHistory();

  if (isAuth) {
    history.push(Locations.HomePage);
  }

  const [values, setValues] = useState<LocalState>({
    showPassword: false,
  });

  const initialValues: AuthRegisterValues = {
    email: '',
    password: '',
  };

  const submitHandler = (formValues: AuthRegisterValues) => {
    console.log('submitHandler :>> ');
    // dispatch(authLoginThunk(formValues));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <>
      <ButtonGoBack />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(v) => submitHandler(v)}
      >
        {(props: FormikProps<AuthRegisterValues>) => {
          const { isValid, dirty } = props;

          return (
            <Form className={classes.form}>
              <Container
                component="main"
                maxWidth="xs"
                className={classes.container}
              >
                <div className={classes.paper}>
                  <Avatar
                    className={
                      !isValid || !dirty
                        ? classes.errorIcon
                        : classes.successIcon
                    }
                  >
                    <LockOutlineIcon />
                  </Avatar>

                  <Typography
                    component="h1"
                    variant="h5"
                    className={classes.typography}
                  >
                    Авторизация
                  </Typography>

                  <Grid container spacing={2}>
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
                        formikkey={fieldName.password}
                        type={
                          values.showPassword
                            ? fieldType.text
                            : fieldType.password
                        }
                        label="Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <CommonEndAdornment
                              showPassword={values.showPassword}
                              handleClick={handleClickShowPassword}
                            />
                          ),
                        }}
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
                        Авторизация
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
