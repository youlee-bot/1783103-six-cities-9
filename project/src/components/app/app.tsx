import IndexPage from '../../pages/index-page/index-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import LoadingScreen from '../../components/loading-screen/loading-screen';

import {useAppSelector} from '../../hooks/index';

import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const/const';

import {Reviews} from  '../../types/types';

type AppProps = {
  reviews: Reviews;
}

export default function App({reviews}: AppProps): JSX.Element {
  const currentState = useAppSelector((state) => state);
  const offers = currentState.offers;
  if (!currentState.offers) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<IndexPage />}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.PropertyId} element={<Property offers={offers} reviews={reviews}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
          />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
