import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/types';

export const changeCity = createAction<City>('app/changeCity');
export const changefoundResults = createAction<number>('app/changeFoundResults');
