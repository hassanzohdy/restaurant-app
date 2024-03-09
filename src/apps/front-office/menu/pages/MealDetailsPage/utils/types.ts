export type ReviewType = {
  name: string;
  image: string;
  rating: number;
  body: string;
  review: string;
  id: number;
  updatedAt: {
    date: string;
  };
  createdBy: {
    id: number;
  };
};

export type Image = {
  hash: string;
  url: string;
  name: string;
};

export type MealCategory = {
  id: number;
  name: string;
};

export type Meal = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: Image;
  price: number;
  totalPrice: number;
  salePrice?: number;
  category: MealCategory;
  isFavorite: boolean;
  rating: number;
  ingredients: string[];
  reviews: number;
  totalReviews: number;
  maxAmountPerOrder?: number;
};

export type Review = {
  name: string;
  review: string;
  rating: number;
  email: string;
  meal: number;
  updatedAt: {
    date: string;
  };
  createdBy: {
    id: number;
  };
};
