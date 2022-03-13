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

export enum CardsDisplayType {
  Index = 'INDEX',
  Property = 'Property',
}

export const START_CITY = 'Paris';

export enum CityList {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
