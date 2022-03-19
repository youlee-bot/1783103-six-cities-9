export type Offer = {
  id: number;
  type: string;
  title: string;
  category: string;
  city: string;
  price: number;
  favorites: boolean;
  rating: number;
  points: {
    lat: number;
    lng: number;
  }
};

export type Offers = Offer[];

