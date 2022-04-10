import FavoritesLocationList from '../../components/favorites-location/favorites-location';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import {AuthStatus, AppRoute} from '../../const/const';
import {Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {store} from '../../store';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {fetchFavoriteOffersAction} from '../../store/api-actions';

export default function Favorites(): JSX.Element {
  const authStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  const favoriteOffers = useAppSelector(({DATA}) => DATA.favoriteOffers);
  const isDataLoaded = useAppSelector(({DATA}) => DATA.isfavoriteOffersLoaded);

  useEffect(() => {
    if (!isDataLoaded) {
      store.dispatch(fetchFavoriteOffersAction());
      console.log(favoriteOffers);
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  if (authStatus !== AuthStatus.Auth) {
    return (
      <Navigate to={AppRoute.Login}/>
    );
  }

  if (favoriteOffers.length !== 0) {
    return (
      <>
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesLocationList offers={favoriteOffers}/>
              </ul>
            </section>
          </div>
        </main>
        <Footer/>
      </>
    );
  } else {
    return (
      <>
        <Header/>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <Footer/>
      </>
    );
  }
}
