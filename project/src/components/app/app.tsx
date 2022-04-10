import IndexPage from '../../pages/index-page/index-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {store} from '../../store';
import {useAppSelector} from '../../hooks/index';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import { fetchOffersAction } from '../../store/api-actions';
import { useEffect } from 'react';

export default function App() {
  const isDataLoaded = useAppSelector(({DATA}) => DATA.isDataLoaded);
  const offers = useAppSelector(({DATA}) => DATA.offers);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, []);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<IndexPage offers={offers}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.PropertyId} element={<Property offers={offers}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<NotFound/>}></Route>
          <Route path={AppRoute.NotFound} element={<NotFound/>}></Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}
