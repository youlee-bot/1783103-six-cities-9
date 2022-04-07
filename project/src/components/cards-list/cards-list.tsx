import {memo} from 'react';
import sortOffers from '../../utils/useSortOffers';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

type cardsListProps = {
  offers: Offers;
  displayType: string;
  sortType: string;
}

function CardsList({offers, displayType, sortType}: cardsListProps): JSX.Element {
  const sortedOffers = sortOffers(offers,sortType);

  return (
    <>
      {sortedOffers.map((element) => (<Card displayType={displayType} key={element.id} offer={element}/>),
      )}
    </>);
}

export default memo(CardsList);
