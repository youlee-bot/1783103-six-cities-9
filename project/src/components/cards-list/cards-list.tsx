import {useCallback, useEffect, useState} from 'react';
import useSortOffers from '../../hooks/useSortOffers';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';
import {Point} from '../../types/types';

import {useAppDispatch} from '../../hooks/index';

import {CardsDisplayType} from '../../const/const';

import {changehoveredPoint} from '../../store/action';

type cardsListProps = {
  offers: Offers;
  displayType: string;
  sortType: string;
}

export default function CardsList({offers, displayType, sortType}: cardsListProps): JSX.Element {
  const [currentActiveCard, setActiveCard] = useState<Point | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changehoveredPoint(currentActiveCard ?? null));
    console.log(currentActiveCard);
  }, [currentActiveCard]);
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

  const onMouseOver = useCallback((evt) => {
    const target = evt.target.closest('article').getAttribute('data-id');
    if (target) {
      setActiveCard(offers[target].location);
      console.log(currentActiveCard);
    }
  }, [currentActiveCard]);

  return (
    <>
      {offers.map((element, elementId) => (
        <article data-id={elementId} key={element.id} onMouseOver={onMouseOver} onMouseOut={()=>setActiveCard(null)} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>),
      )}
    </>);
}
