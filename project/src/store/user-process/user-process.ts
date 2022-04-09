import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthStatus} from '../../const/const';
import {UserProcess} from '../../types/types';

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {requireAuthorization} = userProcess.actions;
