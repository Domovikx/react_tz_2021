import React, { ErrorInfo } from 'react';
import { Grid } from '@material-ui/core';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log('error, info :>> ', error, info);
  }

  render(): JSX.Element | React.ReactNode | null | undefined {
    if (this.state.hasError) {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Что-то пошло не так. Произошла ошибка и всё пропало.</h1>
        </Grid>
      );
    }

    return this.props.children;
  }
}
