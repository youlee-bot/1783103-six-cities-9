import {Link} from 'react-router-dom';

import {useAppSelector} from '../../hooks/index';
import {AuthStatus} from '../../const/const';
import {AppRoute} from '../../const/const';

export default function HeaderLogin(): JSX.Element {
  const currentState = useAppSelector((state) => state);
  if (currentState.authorizationStatus === AuthStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to="/#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/#">
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
          <Link className="header__nav-link header__nav-link--profile" to="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <Link to={AppRoute.Login}><span className="header__login">Sign in</span></Link>
          </Link>
        </li>
      </ul>
    </nav>
  );
}