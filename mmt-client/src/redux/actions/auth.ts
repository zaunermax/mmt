import Immutable from 'seamless-immutable';
import jwtDecode from 'jwt-decode';

import { MmtApi } from '../../util/api/mmt.api';
import {
  AuthActionTypes,
  AuthState,
  ImmutableAuthState,
  LoginActionThunk,
} from '../../types/redux/auth.types';
import { LoginUser, TokenUser } from '../../types/auth.types';

const setToken = (token: string): void => {
  localStorage.setItem('token', token);
  MmtApi.Token = token;
};

const tryDecodeToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return jwtDecode<TokenUser>(token);
  } catch (err) {
    localStorage.removeItem('token');
    return null;
  }
};

const loginAction = (user: LoginUser): LoginActionThunk => dispatch => {
  MmtApi.login(user).then(token => {
    setToken(token);
    const user = jwtDecode<TokenUser>(token);
    dispatch({
      type: 'SET_USER',
      tokenUser: user,
    });
  });
};

const initialState = Immutable<AuthState>({ user: tryDecodeToken() });

export const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): ImmutableAuthState => {
  switch (action.type) {
    case 'SET_USER':
      return state.set('user', action.tokenUser);

    default:
      return state;
  }
};
