import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

type favoritesLocationProps = {
  offers: Offers;
}

//ts-lint ignore
export default function FavoritesLocationList({offers}: favoritesLocationProps): JSX.Element {
  const citys = new Set();

  offers.map((element) => {
    citys.add(element.city);
  });


  return (
    <>
      {
        citys.forEach((city) => (
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
                    return (<Card key={element.id} offer={element}/>);
                  }
                })
              }
            </div>
          </li>))
      }
    </>);
}
