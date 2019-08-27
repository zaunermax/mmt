import { LocationDescriptor } from 'history';
import { TokenUser } from '../types/auth.types';

export type RouteHookReturnType = LocationDescriptor | true;
export type CanActivateData = { currentUser: TokenUser };
export type CanActivateFn = (data: CanActivateData) => RouteHookReturnType;

export const getLink = (route: string, params: { [key: string]: string }) =>
  Object.keys(params).reduce((url, key) => url.replace(`:${key}`, params[key]), route);

// with this function some route protection can be composed
// this function can check if a use is authorized to enter a route
// this function can be passed to the onEnter property of ProtectedRoute
export const composeRouteProtection = (...hooks: CanActivateFn[]) => (
  props: CanActivateData,
) => {
  const executeSeries = (remainingHooks: CanActivateFn[]): RouteHookReturnType => {
    if (!remainingHooks.length) return true;

    const currentHook = remainingHooks[0];
    const res = currentHook(props);

    // as long as true is returned, we can continue as the hook successfully passed
    // once a route object or string is returned we can stop, as we have to redirect
    return res === true ? executeSeries(remainingHooks.slice(1)) : res;
  };

  return executeSeries(hooks);
};

export const routeIsLocDescriptor = (
  route: RouteHookReturnType | false,
): route is LocationDescriptor => typeof route !== 'boolean';
