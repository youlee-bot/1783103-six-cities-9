import {useState} from 'react';
import useSort from '../../hooks/useSort';

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
  dispatch(changehoveredPoint(currentActiveCard ?? null));
  useSort(offers,sortType);

  let articleClassName: string;
  switch (displayType) {
    case (CardsDisplayType.Index):
      articleClassName = 'cities__place-card place-card';
      break;
    case (CardsDisplayType.Property):
      articleClassName = 'near-places__card place-card';
      break;
  }

  return (
    <>
      {offers.map((element) => (
        <article key={element.id} onMouseOver={() => setActiveCard(element.points)} onMouseOut={()=>setActiveCard(null)} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>),
      )}
    </>);
}
