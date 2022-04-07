import {memo, useCallback} from 'react';
import useSortOffers from '../../utils/useSortOffers';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

import {useAppDispatch} from '../../hooks/index';

import {CardsDisplayType} from '../../const/const';

import {changehoveredPoint} from '../../store/action';

type cardsListProps = {
  offers: Offers;
  displayType: string;
  sortType: string;
}

function CardsList({offers, displayType, sortType}: cardsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  useSortOffers(offers,sortType);

  let articleClassName: string;
  switch (displayType) {
    case (CardsDisplayType.Index):
      articleClassName = 'cities__place-card place-card';
      break;
    case (CardsDisplayType.Property):
      articleClassName = 'near-places__card place-card';
      break;
  }

  const onMouseOver = (evt) => {
    const target = evt.target.closest('article').getAttribute('data-id');
    dispatch(changehoveredPoint(offers[target].location));
  };

  const onMouseOut =
    ()=>dispatch(changehoveredPoint(null)),
    [];


  return (
    <>
      {offers.map((element, elementId) => (
        <article data-id={elementId} key={element.id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>),
      )}
    </>);
}

export default memo(CardsList);
