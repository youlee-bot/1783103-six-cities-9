import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/index';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

import {CardsDisplayType} from '../../const/const';

import {changeFoundResults, changeCurrentOffers} from '../../store/action';

type cardsListProps = {
  offers: Offers;
  displayType: string;
}

//ts-lint ignore
export default function CardsList({offers, displayType}: cardsListProps): JSX.Element {
  // eslint-disable-next-line
  const [currentActiveCard, setActiveCard] = useState(0);
  const currentState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const offersToDisplay: Offers = [];

  let articleClassName = '';
  switch (displayType) {
    case (CardsDisplayType.Index):
      articleClassName = 'cities__place-card place-card';
      offers.forEach((element) => {
        if (currentState.currentCity.title === element.city) {
          offersToDisplay.push(element);
        }
      });
      dispatch(changeFoundResults(offersToDisplay.length));
      dispatch(changeCurrentOffers(offersToDisplay));
      break;
    case (CardsDisplayType.Property):
      articleClassName = 'near-places__card place-card';
      offers.forEach((element) => offersToDisplay.push(element));
      break;
  }

  return (
    <>
      {offersToDisplay.map((element) => (
        <article key={element.id} onMouseOver={() => setActiveCard(element.id)} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>),
      )}
    </>);
}
