import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/types';
import {Offers} from '../types/offers';

export const changeCity = createAction<City>('app/changeCity');
export const changeFoundResults = createAction<number>('app/changeFoundResults');
export const changeCurrentOffers = createAction<Offers>('app/changeCurrentOffers');
