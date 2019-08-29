import React, { FC, useCallback } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { AppBar, Tabs, Theme } from '@material-ui/core';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LinkTab } from './components/LinkTab';
import { Overview } from './components/Overview';

export const ROUTE_DASHBOARD_NEWS = 'news';
export const ROUTE_DASHBOARD_ARTICLES = 'products';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    tabContainer: {
      flex: 1,
      position: 'relative',
      display: 'flex',
    },
  }),
);

const News: FC = () => <div>News</div>;
const Products: FC = () => <div>Produkte</div>;

export default ({ location, match }: RouteComponentProps) => {
  const classes = useStyles();

  const getUrl = useCallback(url => `${match.url}/${url}`, [match.url]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={location.pathname}>
          <LinkTab label="Übersicht" value={match.url} />
          <LinkTab label="Aktuelles" value={getUrl(ROUTE_DASHBOARD_NEWS)} />
          <LinkTab label="Infos zu den Waren" value={getUrl(ROUTE_DASHBOARD_ARTICLES)} />
        </Tabs>
      </AppBar>
      <div className={classes.tabContainer}>
        <Switch>
          <Route path={match.url} component={Overview} exact />
          <Route path={getUrl(ROUTE_DASHBOARD_NEWS)} component={News} exact />
          <Route path={getUrl(ROUTE_DASHBOARD_ARTICLES)} component={Products} exact />
        </Switch>
      </div>
    </div>
  );
};
