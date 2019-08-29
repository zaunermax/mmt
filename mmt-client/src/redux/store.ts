import ThunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './actions/auth';
import { appReducer } from './actions/app';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export type GlobalAppState = ReturnType<typeof rootReducer>;

export const initStore = () => {
  const middleware = [ThunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  return createStore(rootReducer, composedEnhancers);
};
