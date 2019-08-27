import React, { FormEventHandler, useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Theme,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/auth';
import { AppState } from '../../redux/store';
import { ROUTE_DASHBOARD } from '../../components/App/app.routes';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles<Theme>(theme =>
  createStyles({
    container: {
      height: '100%',
    },
    titleText: {
      color: 'white',
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main,
    },
    input: {
      marginTop: 20,
    },
    button: {
      marginTop: 40,
      width: '100%',
    },
  }),
);

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.auth.user);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = useCallback<FormEventHandler>(
    e => {
      e.preventDefault();
      dispatch(loginAction({ username, password }));
    },
    [username, password, dispatch],
  );

  return user ? (
    <Redirect to={ROUTE_DASHBOARD} />
  ) : (
    <Grid
      className={classes.container}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card>
        <CardHeader
          title={<div className={classes.titleText}>MMT Login</div>}
          className={classes.cardHeader}
        />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                type={'text'}
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
              />
            </FormControl>
            <FormControl fullWidth className={classes.input}>
              <InputLabel htmlFor="password">Passwort</InputLabel>
              <Input
                id="password"
                type={'password'}
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </FormControl>
            <Button
              className={classes.button}
              color={'primary'}
              type={'submit'}
              variant={'contained'}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
