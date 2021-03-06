import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {AuthStatus} from '../../const/const';
import {AppRoute} from '../../const/const';
import { logoutAction } from '../../store/api-actions';
import { getUserName } from '../../services/token';

export default function HeaderLogin(): JSX.Element {
  const currentAuthorisationStatus = useAppSelector(({USER}) => USER.authorizationStatus);

  const dispatch = useAppDispatch();
  if (currentAuthorisationStatus === AuthStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <span className="header__avatar-wrapper user__avatar-wrapper"></span>
              <span className="header__user-name user__name">
                {getUserName()}
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link"  to={'/#'} onClick={(evt) =>{
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <Link to={AppRoute.Login}><span className="header__login">Sign in</span></Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
