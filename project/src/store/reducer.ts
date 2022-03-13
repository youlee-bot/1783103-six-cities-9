import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeFoundResults, changeCurrentOffers} from './action';

import {CITIES} from '../const/city';
import {offers} from '../mock/offers';


const initialState = {
  currentCity: CITIES[0],
  cities: CITIES,
  foundResults: 0,
  currentOffers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeFoundResults, (state, action) => {
      state.foundResults = action.payload;
    })
    .addCase(changeCurrentOffers, (state, action) => {
      state.currentOffers = action.payload;
    });
});

export {reducer};
