import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';
import {AppData} from '../../types/types';
import {CITIES} from '../../const/city';
import {SortType} from '../../const/const';

const initialState: AppData = {
  currentCity: CITIES[0],
  offers: [],
  hoveredPoint: null,
  sortType: SortType.Popular,
  currentOffer: null,
  error: '',
  reviews: [],
  offerNearby: [],
  favoriteOffers: [],
  isDataLoaded: false,
  isOfferLoaded: false,
  isfavoriteOffersLoaded: false,
};

export const appDataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
    fetchOffers: (state, action) => {
      state.offers = action.payload;
    },
    fetchFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    setIsfavoriteOffersLoaded: (state, action) => {
      state.isfavoriteOffersLoaded = action.payload;
    },
    changehoveredPoint: (state, action) => {
      state.hoveredPoint = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
    fetchOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    setOfferLoaded: (state, action) => {
      state.isOfferLoaded = action.payload;
    },
    fetchReviews: (state, action) => {
      state.reviews = action.payload;
    },
    fetchOfferNearby: (state, action) => {
      state.offerNearby = action.payload;
    },
  },
});

export const {
  changeCity,
  fetchOffers,
  changehoveredPoint,
  changeSortType,
  fetchOffer,
  setError,
  fetchReviews,
  fetchOfferNearby,
  setDataLoaded,
  setOfferLoaded,
  fetchFavoriteOffers,
  setIsfavoriteOffersLoaded,
} = appDataProcess.actions;
