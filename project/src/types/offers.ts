export type Offer = {
  id: number;
  type: string;
  title: string;
  category: string;
  city: string;
  price: number;
  favorites: boolean;
  points: {
    lat: number;
    lng: number;
  }
};

export type Offers = Offer[];

