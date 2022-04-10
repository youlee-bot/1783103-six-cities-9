import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from '../store';
import {saveToken, dropToken, saveUserName, dropUserName} from '../services/token';
import {APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR} from '../const/const';
import {
  fetchOffers,
  fetchOffer,
  setError,
  fetchReviews,
  fetchOfferNearby,
  setOfferLoaded,  fetchFavoriteOffers, setIsfavoriteOffersLoaded, setDataLoaded
} from '../store/app-data/app-data';
import {requireAuthorization} from '../store/user-process/user-process';
import {redirectToRoute} from '../store/action';
import {errorHandle} from '../services/error-handle';
import {Offers, Offer} from '../types/offers';
import {AuthData, UserData, OfferId, Reviews, PostCommentData, PostFavoritesData} from '../types/types';
import {AppRoute} from '../const/const';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    store.dispatch(setDataLoaded(false));
    const {data} = await api.get<Offers>(APIRoute.offers);
    store.dispatch(setDataLoaded(true));
    store.dispatch(fetchOffers(data));
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/fetchFavoriteOffers',
  async () => {
    store.dispatch(setIsfavoriteOffersLoaded(false));
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    store.dispatch(setIsfavoriteOffersLoaded(true));
    store.dispatch(fetchFavoriteOffers(data));
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
      store.dispatch(setOfferLoaded(false));
      const {data} = await api.get<Offer>(`${APIRoute.offers}/${id}`);
      store.dispatch(fetchOffer(data));
      store.dispatch(setOfferLoaded(true));
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
      saveUserName(email);
      store.dispatch(requireAuthorization(AuthStatus.Auth));
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
      dropUserName();
      store.dispatch(requireAuthorization(AuthStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  },
);

export const postCommentAction = createAsyncThunk(
  'data/postComment',
  async ({comment,rating, id}: PostCommentData) => {
    try {
      await api.post<UserData>(`${APIRoute.Comments}/${id}`, {comment: comment, rating: rating});
    } catch (error) {
      errorHandle(error);
    }
  });

export const addToFavoritesAction = createAsyncThunk(
  'data/addToFavorites',
  async ({status, id}: PostFavoritesData) => {
    try {
      await api.post<UserData>(`${APIRoute.Favorite}/${id}/${status}`);
    } catch (error) {
      errorHandle(error);
    }
  });
