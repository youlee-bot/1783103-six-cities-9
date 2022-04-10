import {AppRoute} from '../../const/const';
import {Navigate, RouteProps} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';
import {AuthStatus} from '../../const/const';
import {store} from '../../store/';
import {checkAuthAction} from '../../store/api-actions';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  store.dispatch(checkAuthAction());
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
