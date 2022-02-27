import IndexPage from '../../pages/index-page/index-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';


import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';


import {Offers} from '../../types/offers';


type IndexPageProps = {
  foundResults: number;
  offers: Offers;
}

export default function App({foundResults,offers}: IndexPageProps): JSX.Element {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<IndexPage offers={offers} foundResults={foundResults}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Property} element={<Property offers={offers}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthStatus.Auth}>
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
