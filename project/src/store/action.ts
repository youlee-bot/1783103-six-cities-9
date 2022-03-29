import {createAction} from '@reduxjs/toolkit';
import {City, Reviews} from '../types/types';
import {Offer, Offers} from '../types/offers';
import {Point} from  '../types/types';
import {AppRoute} from '../const/const';

export const changeCity = createAction<City>('app/changeCity');
export const fetchOffers = createAction<Offers>('app/changeCurrentOffers');
export const changehoveredPoint = createAction<Point|null>('app/changeHoveredPoint');
export const changeSortType = createAction<string>('app/changeSortType');
export const changeAuthorizationStatus = createAction<string>('data/changeAuthorizationStatus');
export const fetchOffer = createAction<Offer>('data/fetchOffer');
export const setError = createAction<string>('app/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const fetchReviews = createAction<Reviews>('data/fetchReviews');
export const fetchOfferNearby = createAction<Offers>('data/fetchOfferNearby');
