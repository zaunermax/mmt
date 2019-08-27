import React, { FC } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme();

const useGlobalStyle = makeStyles({
  '@global': {
    'body, html, #root': {
      height: '100%',
    },
  },
});

export const AppGlobalStyle: FC = ({ children }) => {
  useGlobalStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
