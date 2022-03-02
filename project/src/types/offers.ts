export type Offer = {
  id: number;
  type: string;
  title: string;
  category: string;
  city: string;
  price: number;
  favorites: boolean;
};

export type Offers = Offer[];

