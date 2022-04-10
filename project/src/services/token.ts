const AUTH_TOKEN_KEY_NAME = 'x-token';
const AUTH_USER_NAME = 'userName';

export type Token = string;
export type UserName = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getUserName = (): UserName => {
  const userName = localStorage.getItem(AUTH_USER_NAME);
  return userName ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export const saveUserName = (userName: UserName): void => {
  localStorage.setItem(AUTH_USER_NAME, userName);
};

export const dropUserName = (): void => {
  localStorage.removeItem(AUTH_USER_NAME);
};
