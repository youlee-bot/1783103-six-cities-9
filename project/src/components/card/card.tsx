import {Link} from 'react-router-dom';

import {Offer} from '../../types/offers';

import {CardsDisplayType, AppRoute} from '../../const/const';

type cardProps = {
  offer: Offer;
  displayType: string;
}

export default function Card({offer, displayType}: cardProps): JSX.Element {
  const linkToOffer = `${AppRoute.Property}/${offer.id}`;

  let wrapperClassName = '';

  switch (displayType) {
    case (CardsDisplayType.Index):
      wrapperClassName = 'cities__image-wrapper place-card__image-wrapper';
      break;
    case (CardsDisplayType.Property):
      wrapperClassName = 'near-places__image-wrapper place-card__image-wrapper';
  }
  const content = (
    <>
      <div className={wrapperClassName}>
        <Link to={linkToOffer}>
          <img className="place-card__image" src="../../../img/apartment-01.jpg" width={260} height={200} alt="apartment"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </>
  );

  return content;
}
