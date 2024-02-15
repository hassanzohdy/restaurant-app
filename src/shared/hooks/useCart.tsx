import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
} from "apps/front-office/cart/services/cart-service";
import { useHeaderState } from "apps/front-office/design-system/hooks/headerStateHook";
import { State } from "apps/front-office/design-system/layouts/Header/components/HeaderIcons/HeaderCart/CartProducts/CartProducts";
import { filteredMealsAtom } from "apps/front-office/menu/atoms/filtered-meals-atom";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import URLS from "apps/front-office/utils/urls";
import { useEffect, useState } from "react";
import { toastError, toastMealToCart } from "shared/hooks/useToastMessage";
import useGetBaseRoute from "./useGetBaseRoute";

export default function useCart() {
  const meal = mealAtom.useValue();
  const opened = useHeaderState("cartIcon");
  const meals = filteredMealsAtom.use("meals");

  const [state, setState] = useState<State>("initial");
  const [error, setError] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [maxAmountPerOrder, setMaxAmountPerOrder] = useState(
    meal.maxAmountPerOrder,
  );

  // basePath(root route) is need for fetching the data on checkout page if this page is reloaded
  const basePath = useGetBaseRoute(current("route"));

  const addMealToCart = (id: number, amount: number) => {
    setIsLoading(true);

    const mealData: Meal = meals.filter(meal => meal.id === id)[0];

    const massage = () => {
      return (
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-slate-100 rounded-[44%] w-[50px]">
            <img src={mealData.image.url} alt={mealData.name} />
          </div>
          <span>{trans("addedToCart")}</span>
        </div>
      );
    };

    addToCart(id, amount)
      .then(() => {
        toastMealToCart(massage());
      })
      .catch(error => {
        if (error.response?.data.maxAmountPerOrder) {
          toastError(error.response.data.maxAmountPerOrder);
          setMaxAmountPerOrder(error.response.data.maxAmountPerOrder);
        } else {
          toastError(trans("somethingWentWrong"));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateCartItem = (id: number, amount: number) => {
    setIsLoading(true);

    updateCart(id, amount)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const removeItemFromCart = (id: number) => {
    removeFromCart(id).catch(response => {
      toastError(response.data.error);
    });
  };

  const onCheckoutPage = basePath === URLS.checkout.page;

  useEffect(() => {
    if (state !== "initial" || (!onCheckoutPage && !opened)) return;

    setState("loading");

    getCart()
      .then(() => {
        // @SEE: shared/endpoint success event
        setState("loaded");
      })
      .catch(error => {
        setState("failed");
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      });
  }, [opened, state]);

  return {
    addMealToCart,
    updateCartItem,
    removeItemFromCart,
    isLoading,
    maxAmountPerOrder,
    error,
    state,
  };
}
