import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';
import {REQUEST_TIMEOUT} from '../const/const';

const BACKEND_URL = 'https://9.react.pages.academy/six-cities';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
