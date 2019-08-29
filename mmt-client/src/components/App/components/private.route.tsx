import React, { FC, Suspense } from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';
import { CanActivateFn, routeIsLocDescriptor } from '../../../util/route.helper';
import { LoadingComponent } from './loading.component';
import { ROUTE_LOGIN } from '../app.routes';
import { useSelector } from 'react-redux';
import { GlobalAppState } from '../../../redux/store';

export interface PrivateRouteProps extends RouteProps {
  canActivate: CanActivateFn;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ canActivate, ...routeProps }) => {
  const user = useSelector((state: GlobalAppState) => state.auth.user);

  const route = user ? canActivate({ currentUser: user }) : false;

  return routeIsLocDescriptor(route) ? (
    <Redirect to={route} />
  ) : !route ? (
    <Redirect to={ROUTE_LOGIN} />
  ) : (
    <Suspense fallback={<LoadingComponent />}>
      <Route {...routeProps} />
    </Suspense>
  );
};
