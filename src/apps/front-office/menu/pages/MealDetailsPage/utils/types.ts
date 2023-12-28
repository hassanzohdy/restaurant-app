export type ReviewType = {
  name: string;
  image: string;
  ratings: number;
  body: string;
  date: string;
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
  totalPrice:number;
  salePrice?: number;
  category: MealCategory;
  isFavorite: boolean;
  ratings: number;
  ingredients: string[];
  reviews: number;
  maxAmountPerOrder?: number;
};
