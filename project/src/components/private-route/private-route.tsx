import {AppRoute} from '../../const/const';
import {Navigate, RouteProps} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';
import {AuthStatus} from '../../const/const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const currentState = useAppSelector((state) => state);
  const authorizationStatus = currentState.authorizationStatus;

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
