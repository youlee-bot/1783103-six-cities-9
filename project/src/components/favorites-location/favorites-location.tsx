import { Offers } from '../../types/offers';
import FavoritesCitySection from '../favorites-city-section/favorites-city-section';

type FavoriteLocationListProps = {
  offers: Offers;
}

export default function FavoritesLocationList({offers}:FavoriteLocationListProps): JSX.Element {
  const currentCities = offers.reduce((Cities: string[], offer) => {
    if (!Cities.includes(offer.city.name)) {
      Cities.push(offer.city.name);
    }
    return Cities;
  }, []);
  return (
    <>
      {
        currentCities.map((city) => <FavoritesCitySection key={city} city={city} offers={offers}/>)
      }
    </>);
}
