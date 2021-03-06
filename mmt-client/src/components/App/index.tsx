import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from '../../redux/store';
import { Routes } from './app.routes';
import { AppGlobalStyle } from './app.styles';
import { MmtApi } from '../../util/api/mmt.api';

const store = initStore();

MmtApi.Base = 'http://localhost:8080/';

export const App: FC = () => {
  return (
    <AppGlobalStyle>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </AppGlobalStyle>
  );
};
