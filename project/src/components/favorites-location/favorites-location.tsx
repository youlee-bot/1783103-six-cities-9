import { Offers } from '../../types/offers';
import FavoritesCitySection from '../favorites-city-section/favorites-city-section';

type FavoriteLocationListProps = {
  offers: Offers;
}

export default function FavoritesLocationList({offers}:FavoriteLocationListProps): JSX.Element {
  const currentCities = offers.reduce((сities: string[], offer) => {
    if (!сities.includes(offer.city.name)) {
      сities.push(offer.city.name);
    }
    return сities;
  }, []);
  return (
    <>
      {
        currentCities.map((city) => <FavoritesCitySection key={city} city={city} offers={offers}/>)
      }
    </>);
}
