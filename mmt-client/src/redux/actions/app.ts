import Immutable from 'seamless-immutable';
import { AppActionTypes, AppState } from '../../types/redux/app.types';

const initialState = Immutable<AppState>({ dashboardTabIndex: 0 });

export const appReducer = (state = initialState, action: AppActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
