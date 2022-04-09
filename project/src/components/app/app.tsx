import IndexPage from '../../pages/index-page/index-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import {useAppSelector} from '../../hooks/index';

import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const/const';

export default function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  if (!offers) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <div className="page">
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<IndexPage />}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.PropertyId} element={<Property offers={offers}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites offers={offers}/>
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
