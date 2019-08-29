import React, { FC } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#333333',
    },
    secondary: blue,
  },
});

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
