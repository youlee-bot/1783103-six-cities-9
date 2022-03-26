import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fetchOffers, changehoveredPoint, changeSortType} from './action';

import {Cities, City, Point} from '../types/types';
import {Offers} from '../types/offers';

import {CITIES} from '../const/city';

import {SortType, AuthStatus} from '../const/const';

interface CurrentState {
  currentCity: City,
  cities: Cities,
  offers: Offers,
  hoveredPoint: Point | null,
  sortType: string,
  authorizationStatus: string,
}

const initialState: CurrentState = {
  currentCity: CITIES[0],
  cities: CITIES,
  offers: [],
  hoveredPoint: null,
  sortType: SortType.Popular,
  authorizationStatus: AuthStatus.Unknown,
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
    });
});

export {reducer};
