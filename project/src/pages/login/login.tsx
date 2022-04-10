import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LoginForm from '../../components/login-form/login-form';
import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {AppRoute, AuthStatus } from '../../const/const';

export default function Login():JSX.Element {
  const authStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  if (authStatus === AuthStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root}/>
    );
  }
  return (
    <>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}
