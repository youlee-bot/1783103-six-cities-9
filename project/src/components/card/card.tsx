import {Link} from 'react-router-dom';

import {Offer} from '../../types/offers';

import {CardsDisplayType, AppRoute, AuthStatus} from '../../const/const';
import {memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changehoveredPoint} from '../../store/app-data/app-data';
import { addToFavoritesAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { store } from '../../store';

type cardProps = {
  offer: Offer;
  displayType: string;
}

function Card({offer, displayType}: cardProps): JSX.Element {
  const linkToOffer = `${AppRoute.Property}/${offer.id}`;
  let wrapperClassName = '';
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(({USER})=>USER.authorizationStatus);
  let articleClassName: string|undefined;
  switch (displayType) {
    case (CardsDisplayType.Index):
      wrapperClassName = 'cities__image-wrapper place-card__image-wrapper';
      articleClassName = 'cities__place-card place-card';
      break;
    case (CardsDisplayType.Property):
      wrapperClassName = 'near-places__image-wrapper place-card__image-wrapper';
      articleClassName = 'near-places__card place-card';
  }

  return (
    <article className={articleClassName} onMouseOver={(evt) => dispatch(changehoveredPoint(offer.location))} onMouseOut={() => dispatch(changehoveredPoint(null))}>
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
          <button className="place-card__bookmark-button button" type="button" onClick={()=>{
            if (authStatus === AuthStatus.Auth) {
              dispatch(addToFavoritesAction({status: Number(!offer.isFavorite), id:offer.id}));
            } else {
              store.dispatch(redirectToRoute(AppRoute.Login));
            }
          }}
          >
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
          <Link to="/#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(Card);
