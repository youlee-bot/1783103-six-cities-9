import {memo} from 'react';
import useSortOffers from '../../utils/useSortOffers';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

type cardsListProps = {
  offers: Offers;
  displayType: string;
  sortType: string;
}

function CardsList({offers, displayType, sortType}: cardsListProps): JSX.Element {
  useSortOffers(offers,sortType);

  return (
    <>
      {offers.map((element) => (<Card displayType={displayType} key={element.id} offer={element}/>),
      )}
    </>);
}

export default memo(CardsList);
