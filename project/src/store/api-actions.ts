import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from '../store';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const/const';
import {fetchOffers, changeAuthorizationStatus, fetchOffer, setError, redirectToRoute, fetchReviews, fetchOfferNearby} from '../store/action';
import {errorHandle} from '../services/error-handle';
import {Offers, Offer} from '../types/offers';
import {AuthData, UserData, OfferId, Reviews, PostCommentData} from '../types/types';
import {AppRoute} from '../const/const';
import {getToken} from '../services/token';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offers>(APIRoute.offers);
    store.dispatch(fetchOffers(data));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferInfoAction = createAsyncThunk(
  'data/fetchOfferInfo',
  async (id: OfferId) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.offers}/${id}`);
      store.dispatch(fetchOffer(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Result));
    }
  },
);

export const fetchOfferNearbyAction = createAsyncThunk(
  'data/fetchOfferNearby',
  async (id: OfferId) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.offers}/${id}/nearby`);
      store.dispatch(fetchOfferNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferReviewsAction = createAsyncThunk(
  'data/fetchOfferReviews',
  async (id: OfferId) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      store.dispatch(fetchReviews(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Result));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(changeAuthorizationStatus(AuthStatus.Auth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postCommentAction = createAsyncThunk('data/postComment', async ({comment:comment, rating:rating, id:id}: PostCommentData) => {
  try {
    const data = {
      params: {
        comment: comment,
        rating: rating,
      },
      headers: {
        'X-Auth-Token': getToken(),
      },
    };
    await api.post<UserData>(`${APIRoute.Comments}/${id}`, data);
  } catch (error) {
    console.log(error);
    errorHandle(error);
  }
});
