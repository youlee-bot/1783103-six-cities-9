import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewList from '../../components/review-list/review-list';
import CardsList from '../../components/cards-list/cards-list';
import Gallery from '../../components/gallery/gallery';
import LoadingScreen from '../../components/loading-screen/loading-screen';

import {Offers} from '../../types/offers';

import {CardsDisplayType, SortType} from '../../const/const';
import {fetchOfferInfoAction, fetchOfferReviewsAction, fetchOfferNearbyAction} from '../../store/api-actions';

import {useAppSelector, useAppDispatch} from '../../hooks';
import {store} from '../../store';


type cardsListProps = {
  offers: Offers;
}
export default function Property({offers}: cardsListProps): JSX.Element {
  const {id} = useParams();
  const currentState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  let offerData;
  let reviews;
  let offerNearby;

  useEffect(() => {
    store.dispatch(fetchOfferInfoAction(Number(id)));
    store.dispatch(fetchOfferReviewsAction(Number(id)));
    store.dispatch(fetchOfferNearbyAction(Number(id)));
  }, [dispatch, id]);
  if (currentState.currentOffer) {
    offerData = currentState.currentOffer;
    reviews = currentState.reviews;
    offerNearby= currentState.offerNearby;
  }

  if (offerData) {
    console.log(currentState);
    return (
      <>
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <Gallery images={offerData.images}/>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {offerData.isPremium ? (<div className="property__mark"><span>Premium</span></div>) : ''}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offerData.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offerData.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    Apartment
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    3 Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max 4 adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{offerData.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offerData.goods.map((good) => (<li className="property__inside-item" key={good}>{good}</li>))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offerData.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{offerData.host.name}</span>
                    {offerData.host.isPro ? (<span className="property__user-status">Pro</span>) : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offerData.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{reviews?reviews.length:'0'}</span>
                  </h2>
                  {reviews?(<ReviewList reviews={reviews}/>):''}
                  <CommentForm/>
                </section>
              </div>
            </div>
            <section className="property__map map"/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offerNearby?<CardsList displayType={CardsDisplayType.Property} offers={offerNearby} sortType={SortType.Popular}/>:'No Offers nearby'}
              </div>
            </section>
          </div>
        </main>
        <Footer/>
      </>

    );
  }
  return (<LoadingScreen/>);
}

