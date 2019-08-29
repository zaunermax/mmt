import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardHeader, Grid, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme =>
  createStyles({
    card: {
      margin: theme.spacing(1),
      flex: 1,
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

export const Overview: FC = () => {
  const { card, flexColumn } = useStyles();
  return (
    <Grid container className={card}>
      <Grid item xs={6} container direction={'column'}>
        <Grid item xs className={flexColumn}>
          <Card className={card}>
            <CardHeader title={'Inventar'} />
            <CardContent>list View</CardContent>
          </Card>
        </Grid>
        <Grid item xs className={flexColumn}>
          <Card className={card}>
            <CardHeader title={'Inventar'} />
            <CardContent>list View</CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={6} container direction={'column'}>
        <Grid item xs className={flexColumn}>
          <Card className={card}>
            <CardHeader title={'Waren'} />
            <CardContent>list View</CardContent>
          </Card>
        </Grid>
        <Grid item xs className={flexColumn}>
          <Card className={card}>
            <CardHeader title={'Waren'} />
            <CardContent>list View</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
