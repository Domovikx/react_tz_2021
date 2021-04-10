import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Props } from './Footer.types';
import { REST_SRV } from '../../../constants/urlsApi';
import { useStyles } from './Footer.styles';

export const Footer = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Button
          className={classes.btn}
          href="https://github.com/Domovikx/react_tz_2021"
          target="_blank"
        >
          Github
        </Button>
        <Button className={classes.btn} href={REST_SRV} target="_blank">
          REST API server
        </Button>
      </Container>
    </Box>
  );
};
