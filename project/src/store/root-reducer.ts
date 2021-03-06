import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {appDataProcess} from './app-data/app-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appDataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
