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
  reviewId: number;
  name: string;
  avatar: string;
  reviewContent: string;
  reviewDate: string;
  offerId: number;
};

export type Reviews = Review[];
