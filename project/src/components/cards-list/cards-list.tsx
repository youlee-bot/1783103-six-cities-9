import {useState} from 'react';

import Card from '../../components/card/card';
import {Offers} from '../../types/offers';

type cardsListProps = {
  offers: Offers;
}

//ts-lint ignore
export default function CardsList({offers}: cardsListProps): JSX.Element {
  const [currentActiveCard, setActiveCard] = useState(0);

  if (currentActiveCard) {
    console.log(currentActiveCard);
  }//wip
  return (
    <>
      {offers.map((element) => (<div key={element.id} onMouseOver={()=>setActiveCard(element.id)}><Card offer={element} /></div>))}
    </>);
}

