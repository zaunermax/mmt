import { ThunkAction } from 'redux-thunk';
import { TokenUser } from '../auth.types';
import { Nullable } from '../helper.types';
import { ImmutableObject } from 'seamless-immutable';

export interface AuthState {
  user: Nullable<TokenUser>;
}

export type ImmutableAuthState = ImmutableObject<AuthState>;

export const SET_USER = 'SET_USER';

interface LoginAction {
  type: typeof SET_USER;
  tokenUser: TokenUser;
}

export type AuthActionTypes = LoginAction;

export type LoginActionThunk = ThunkAction<void, {}, {}, AuthActionTypes>;
