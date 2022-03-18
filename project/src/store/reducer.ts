import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers, changehoveredPoint} from './action';

import {Cities, City, Point} from '../types/types';
import {Offers} from '../types/offers';

import {CITIES} from '../const/city';
import {offers} from '../mock/offers';

interface CurrentState {
  currentCity: City,
  cities: Cities,
  offers: Offers,
  hoveredPoint: Point|null,
}

const initialState = {
  currentCity: CITIES[0],
  cities: CITIES,
  offers: offers,
  hoveredPoint: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changehoveredPoint, (state, action) => {
      state.hoveredPoint = action.payload;
    });
});

export {reducer};
