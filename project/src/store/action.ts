import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/types';
import {Offers} from '../types/offers';
import {Point} from  '../types/types';

export const changeCity = createAction<City>('app/changeCity');
export const fetchOffers = createAction<Offers>('app/changeCurrentOffers');
export const changehoveredPoint = createAction<Point|null>('app/changeHoveredPoint');
export const changeSortType = createAction<string>('app/changeSortType');
