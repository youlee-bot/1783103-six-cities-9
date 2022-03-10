import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changefoundResults} from './action';
import {CITIES} from '../const/city';


const initialState = {
  currentCity: CITIES[0],
  cities: CITIES,
  foundResults: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changefoundResults, (state, action) => {
      state.foundResults = action.payload;
    });
});

export {reducer};
