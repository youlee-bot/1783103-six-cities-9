import {useState} from 'react';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

import {CardsDisplayType} from '../../const';

type cardsListProps = {
  offers: Offers;
  displayType: string;
}

//ts-lint ignore
export default function CardsList({offers, displayType}: cardsListProps): JSX.Element {
  // eslint-disable-next-line
  const [currentActiveCard, setActiveCard] = useState(0);

  let articleClassName = '';

  switch (displayType) {
    case (CardsDisplayType.Index):
      articleClassName = 'cities__place-card place-card';
      break;
    case (CardsDisplayType.Property):
      articleClassName = 'near-places__card place-card';
  }

  return (
    <>
      {offers.map((element) => (
        <article key={element.id} onMouseOver={() => setActiveCard(element.id)} className={articleClassName}>
          <Card displayType={displayType} offer={element}/>
        </article>))}
    </>);
}
