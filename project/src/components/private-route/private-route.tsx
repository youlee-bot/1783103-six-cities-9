import {AuthStatus, AppRoute} from '../../const/const';
import {Navigate, RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
