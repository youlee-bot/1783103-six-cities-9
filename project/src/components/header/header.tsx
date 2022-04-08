import { useLocation } from 'react-router-dom';
import {AppRoute} from '../../const/const';
import Logo from '../logo/logo';
import HeaderLogin from '../../components/header-login/header-login';
import {memo} from 'react';

function Header() {
  const currentLocation = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {currentLocation.pathname!==AppRoute.Login?<HeaderLogin/>:''}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
