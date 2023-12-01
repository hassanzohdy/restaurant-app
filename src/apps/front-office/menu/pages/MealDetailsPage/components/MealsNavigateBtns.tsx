import { Link } from "@mongez/react-router";
import { cn } from "apps/front-office/design-system/utils/cn";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import { getMealPosition } from "apps/front-office/menu/services/meals-service";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Meal } from "../utils/types";

type MealsNavigateBtnsProps = {
  meal: number;
};

type PopupMealProps = {
  meal: Meal | null;
  navigationMeal: { next: boolean; prev: boolean };
};

function PopupMeal({ meal, navigationMeal }: PopupMealProps) {
  if (!meal) return null;

  const displayedPrice = formatPrice(meal.price);
  const displayedSale = formatPrice(meal.salePrice);

  return (
    <div
      className={cn(
        "transition-all opacity-0 duration-300 group-hover:opacity-100 w-max text-sm z-10 shadow-lg flex gap-4 absolute top-[calc(100%+10px)] right-0  p-4 rounded-xl bg-white",
        navigationMeal.next || navigationMeal.prev
          ? "pointer-events-auto"
          : "pointer-events-none ",
      )}>
      <img
        src={meal.image.url}
        alt={meal.name}
        className="w-20 h-20"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-2 items-start shrink">
        <p className="">{meal.name}</p>
        <div className="flex gap-2">
          <span className="inline-block text-rose-600">{displayedSale}</span>
          <span
            className={`inline-block  ${
              displayedSale ? "text-black line-through" : "text-primary-main"
            }`}>
            {displayedPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

type MealNavigation = {
  meals: {
    prev: Meal | null;
    next: Meal | null;
  };
  state: {
    next: "initial" | "loading" | "loaded";
    prev: "initial" | "loading" | "loaded";
  };
};

const MealsNavigateBtns = ({ meal }: MealsNavigateBtnsProps) => {
  const [navigationMeal, setNavigationMeal] = useState({
    next: false,
    prev: false,
  });

  const [data, setData] = useState<MealNavigation>({
    meals: {
      prev: null,
      next: null,
    },
    state: {
      next: "initial",
      prev: "initial",
    },
  });

  const loadMeal = (position: "next" | "prev") => {
    setData({
      ...data,
      state: {
        ...data.state,
        [position]: "loading",
      },
    });

    getMealPosition(meal, position).then(response => {
      setData({
        ...data,
        meals: { ...data.meals, [position]: response.data.meal },
        state: {
          ...data.state,
          [position]: "loaded",
        },
      });

      setNavigationMeal(oldState => {
        return { ...oldState, [position]: true };
      });
    });
  };

  const prevMeal = data.meals.prev;
  const nextMeal = data.meals.next;

  const mouseEnterHandler = (position: "next" | "prev") => {
    if (data.state[position] === "initial") {
      return loadMeal(position);
    }

    if (data.state[position] === "loading") return;

    setNavigationMeal(oldState => ({ ...oldState, [position]: true }));
  };

  const mouseLeaveHandler = () => {
    setNavigationMeal({
      next: false,
      prev: false,
    });
  };

  return (
    <div className="flex items-center absolute top-1/2 -translate-y-1/2 right-6 gap-4 text-2xl text-black">
      <Link
        className="btn btn-primary flex group items-center justify-center rounded-full w-8 h-8 bg-primary-main hover:bg-primary-hover cursor-pointer hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("prev")}
        href={prevMeal ? URLS.menu.viewMeal(prevMeal) : undefined}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropLeftLine className="shrink-0 rtl:rotate-180" />
        {<PopupMeal navigationMeal={navigationMeal} meal={prevMeal} />}
      </Link>
      <button
        disabled={data.state.next === "loaded" && !nextMeal}
        onClick={() => {
          if (nextMeal) {
            return URLS.menu.viewMeal(nextMeal);
          }
        }}
        className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-main btn btn-primary flex group items-center justify-center rounded-full w-8 h-8 bg-primary-main hover:bg-primary-hover cursor-pointer hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("next")}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropRightLine className="shrink-0 rtl:rotate-180" />
        {<PopupMeal navigationMeal={navigationMeal} meal={nextMeal} />}
      </button>
    </div>
  );
};

export default MealsNavigateBtns;
