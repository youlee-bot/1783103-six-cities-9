import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import SortMenu from '../../components/sort-menu/sort-menu';

import {Offers} from '../../types/offers';
import {Points} from '../../types/types';

import {CardsDisplayType} from '../../const/const';

import {useAppSelector} from '../../hooks/index';

type MainContentProps = {
  offers: Offers;
}

export default function MainContent({offers}:MainContentProps):JSX.Element {
  const currentCity = useAppSelector(({DATA}) => DATA.currentCity.title);
  const currentSortType = useAppSelector(({DATA}) => DATA.sortType);

  const offersToDisplay: Offers = [];

  const points: Points = [];

  offers?.forEach((element) => {
    if (currentCity === element.city.name) {
      offersToDisplay.push(element);
      points.push(element.location);
    }
  });
  const foundResults = offersToDisplay.length;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{foundResults} places to stay in {currentCity}</b>
          <SortMenu/>
          <div className="cities__places-list places__list tabs__content">
            <CardsList displayType={CardsDisplayType.Index} offers={offersToDisplay} sortType={currentSortType}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"><Map points={points}/></section>
        </div>
      </div>
    </div>
  );
}
