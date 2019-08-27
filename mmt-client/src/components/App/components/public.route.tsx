import React, { FC, Suspense } from 'react';
import { RouteProps, Route } from 'react-router-dom';

export const PublicRoute: FC<RouteProps> = props => (
  <Suspense fallback={<div />}>
    <Route {...props} />
  </Suspense>
);
