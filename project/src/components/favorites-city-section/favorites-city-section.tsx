import {Offers} from '../../types/offers';
import Card from '../../components/card/card';
import {CardsDisplayType} from '../../const/const';

type FavoritesCitySectionProps = {
  city: string;
  offers: Offers;
}

export default function FavoritesCitySection({city, offers}:FavoritesCitySectionProps ) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((element) => {
            if (element.city.name === city) {
              return (<Card displayType={CardsDisplayType.Index} key={element.id} offer={element}/>);
            }
          })
        }
      </div>
    </li>
  );
}
