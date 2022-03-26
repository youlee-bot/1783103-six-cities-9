import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const/const';
import {fetchOffers, changeAuthorizationStatus} from '../store/action';
import {Offers} from '../types/offers';
import {AuthData} from '../types/types';
import {UserData} from '../types/types';
import {AuthStatus} from '../const/const';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offers>(APIRoute.offers);
    store.dispatch(fetchOffers(data));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(changeAuthorizationStatus(AuthStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
  },
);

