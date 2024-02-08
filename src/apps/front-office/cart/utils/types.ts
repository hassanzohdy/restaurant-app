import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

type Total = {
  discount: number;
  originalPrice: number;
  subtotal: number;
};

export type CartItem = {
  id: number;
  meal: Meal;
  price: number;
  salePrice: number;
  quantity: number;
  total: Total;
};

export type Cart = {
  id: number;
  coupon?: {
    code: string;
    value: number;
  };
  items: CartItem[];
  total: {
    quantity: number;
    price: number;
    finalPrice: number;
    salePrice: number;
    coupon?: number;
  };
};
