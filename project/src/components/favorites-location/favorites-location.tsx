import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

import {CardsDisplayType} from '../../const/const';

type favoritesLocationProps = {
  offers: Offers;
}

//ts-lint ignore
export default function FavoritesLocationList({offers}: favoritesLocationProps): JSX.Element {
  const cities = new Set();
  offers.forEach((element) => cities.add(element.city));


  return (
    <>
      {
        cities.forEach((city) => (
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span></span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {
                offers.map((element) => {
                  if (element.city === city) {
                    return (<Card displayType={CardsDisplayType.Index} key={element.id} offer={element}/>);
                  }
                })
              }
            </div>
          </li>))
      }
    </>);
}
