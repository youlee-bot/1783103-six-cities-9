import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fetchOffers, changehoveredPoint, changeSortType, fetchOffer, setError, fetchReviews, fetchOfferNearby} from './action';

import {CurrentState} from '../types/types';

import {CITIES} from '../const/city';

import {SortType, AuthStatus} from '../const/const';

const initialState: CurrentState = {
  currentCity: CITIES[0],
  cities: CITIES,
  offers: [],
  hoveredPoint: null,
  sortType: SortType.Popular,
  authorizationStatus: AuthStatus.Unknown,
  currentOffer: null,
  error: '',
  reviews: [],
  offerNearby: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changehoveredPoint, (state, action) => {
      state.hoveredPoint = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(fetchReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(fetchOfferNearby, (state, action) => {
      state.offerNearby = action.payload;
    });
});

export {reducer};
