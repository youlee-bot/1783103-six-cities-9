import FavoritesLocationList from '../../components/favorites-location/favorites-location';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


import {Offers} from '../../types/offers';

type FavoritesProps = {
  offers: Offers;
}

export default function Favorites({offers}: FavoritesProps): JSX.Element {
  return (
    <>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesLocationList offers={offers}/>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}
