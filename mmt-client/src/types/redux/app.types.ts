import { ImmutableObject } from 'seamless-immutable';
import { ThunkAction } from 'redux-thunk';
import { GlobalAppState } from '../../redux/store';

export interface AppState {
  dashboardTabIndex: number;
}

export type ImmutableAppState = ImmutableObject<AppState>;

export const SET_DASHBOARD_TAB_INDEX = 'SET_DASHBOARD_TAB_INDEX';

interface SetDashboardIndexAction {
  type: typeof SET_DASHBOARD_TAB_INDEX;
  tabIndex: number;
}

export type AppActionTypes = SetDashboardIndexAction;

export type SetDashboardIndexThunk = ThunkAction<
  void,
  GlobalAppState,
  {},
  AppActionTypes
>;
