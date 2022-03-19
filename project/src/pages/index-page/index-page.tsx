import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import MenuList from '../../components/menu-list/menu-list';
import SortMenu from '../../components/sort-menu/sort-menu';

import {Offers} from '../../types/offers';
import {Points} from '../../types/types';

import {CardsDisplayType} from '../../const/const';

import {useAppSelector} from '../../hooks/index';

export default function IndexPage(): JSX.Element {
  const currentState = useAppSelector((state) => state);
  const currentCity = currentState.currentCity.title;
  const offersToDisplay: Offers = [];
  const offers = currentState.offers;
  const points: Points = [];

  offers.forEach((element) => {
    if (currentCity === element.city) {
      offersToDisplay.push(element);
      points.push(element.points);
    }
  });
  const foundResults = offersToDisplay.length;


  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <MenuList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{foundResults} places to stay in {currentCity}</b>
              <SortMenu/>
              <div className="cities__places-list places__list tabs__content">
                <CardsList displayType={CardsDisplayType.Index} offers={offersToDisplay} sortType={currentState.sortType}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"><Map points={points} hoveredCardPoints={currentState.hoveredPoint}/></section>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>

  );
}
