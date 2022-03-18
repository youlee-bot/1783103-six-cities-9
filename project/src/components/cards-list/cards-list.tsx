import {useState} from 'react';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';
import {Point} from '../../types/types';

import {useAppSelector, useAppDispatch} from '../../hooks/index';

import {CardsDisplayType} from '../../const/const';

import {changehoveredPoint} from '../../store/action';

type cardsListProps = {
  offers: Offers;
  displayType: string;
}

//ts-lint ignore
export default function CardsList({offers, displayType}: cardsListProps): JSX.Element {
  // eslint-disable-next-line
  const [currentActiveCard, setActiveCard] = useState<Point|null>(null);
  const dispatch = useAppDispatch();
  const currentState = useAppSelector((state) => state);
  dispatch(changehoveredPoint(currentActiveCard ?? null));
  //const hoveredPoint = currentState.hoveredPoint;

  console.log(currentState);
  let articleClassName:string;
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
        <article key={element.id} onMouseOver={() => setActiveCard(element.points)} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>),
      )}
    </>);
}
