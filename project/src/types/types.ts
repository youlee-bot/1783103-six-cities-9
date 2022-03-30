import * as stream from "stream";

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Cities = City[]

export type Point = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Points = Point[];

export type Review = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
    }
};

export type Reviews = Review[];

export type AuthData = {
  login: string;
  password: string;
};

export type PostCommentData = {
  comment: string;
  rating: number;
  id: number;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type OfferId = number;

export type ErrorType = unknown;

