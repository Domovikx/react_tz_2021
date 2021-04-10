import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Props } from './Footer.types';
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
      </Container>
    </Box>
  );
};
