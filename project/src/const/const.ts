export enum AppRoute {
  Root = '/',
  Login = '/login',
  Result = '/result',
  Favorites = '/favorites',
  Property = '/offer',
  PropertyId = '/offer/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortType {
  Popular ='Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum CardsDisplayType {
  Index = 'INDEX',
  Property = 'Property',
}

export const START_CITY = 'Paris';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum APIRoute {
  offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
