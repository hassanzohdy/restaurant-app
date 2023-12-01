import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export type CartItem = {
  id: number;
  meal: Meal;
  price: number;
  salePrice: number;
  totalPrice: number;
  quantity: number;
};

export type Cart = {
  id: number;
  items: CartItem[];
  total: {
    quantity: number;
    price: number;
    finalPrice: number;
    salePrice: number;
  };
};
