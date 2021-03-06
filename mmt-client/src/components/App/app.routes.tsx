import React, { FC, lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { PublicRoute } from './components/public.route';
import { PrivateRoute } from './components/private.route';

export const ROUTE_ROOT = '/';
export const ROUTE_LOGIN = '/login';
export const ROUTE_DASHBOARD = '/dashboard';

const AsyncLoginPage = lazy(() => import('../../pages/LoginPage'));
const AsyncDashboardPage = lazy(() => import('../../pages/Dashboard'));
const AsyncNotFoundPage = lazy(() => import('../../pages/404'));

export const Routes: FC = () => {
  return (
    <Switch>
      <Redirect from={ROUTE_ROOT} to={ROUTE_DASHBOARD} exact />
      <PublicRoute path={ROUTE_LOGIN} component={AsyncLoginPage} exact />
      <PrivateRoute
        path={ROUTE_DASHBOARD}
        canActivate={() => true}
        component={AsyncDashboardPage}
      />
      <PublicRoute component={AsyncNotFoundPage} />
    </Switch>
  );
};
