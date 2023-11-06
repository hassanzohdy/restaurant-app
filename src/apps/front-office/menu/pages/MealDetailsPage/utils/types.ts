export type ReviewType = {
  name: string;
  image: string;
  ratings: number;
  body: string;
  date: string;
};

export type PopupMealType = {
  id: number;
  title: string;
  price: number;
  sale?: number;
  image: string;
};

export type MealType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: string;
  isFavorite: boolean;
  ratings: number;
  ingredients: string[];
  reviews: ReviewType[];
  nextMeal: PopupMealType;
  prevMeal: PopupMealType;
};
