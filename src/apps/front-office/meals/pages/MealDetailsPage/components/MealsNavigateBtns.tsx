import { Link } from "@mongez/react-router";
import { cn } from "apps/front-office/design-system/utils/cn";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { PopupMealType } from "../utils/types";

type MealsNavigateBtnsProps = {
  nextMeal: PopupMealType;
  prevMeal: PopupMealType;
};

type PopupMealProps = {
  meal: PopupMealType;
  navigationMeal: { next: boolean; prev: boolean };
};

const PopupMeal = ({ meal, navigationMeal }: PopupMealProps) => {
  const displayedPrice = formatPrice(meal.price);

  const displayedSale = formatPrice(meal.sale);

  return (
    <div
      className={cn(
        "transition-all opacity-0 duration-300 group-hover:opacity-100 w-max text-sm z-10 shadow-lg flex gap-4 absolute top-[calc(100%+10px)] right-0  p-4 rounded-xl bg-white",
        navigationMeal.next || navigationMeal.prev
          ? "pointer-events-auto"
          : "pointer-events-none ",
      )}>
      <img
        src={meal.image}
        alt="meal image"
        className="w-20 h-20"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-2 items-start shrink">
        <p className="">{meal.title}</p>
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
};

const MealsNavigateBtns = ({ nextMeal, prevMeal }: MealsNavigateBtnsProps) => {
  const [navigationMeal, setNavigationMeal] = useState({
    next: false,
    prev: false,
  });

  const mouseEnterHandler = (element: "next" | "prev") => {
    setNavigationMeal(oldState => ({ ...oldState, [element]: true }));
  };

  const mouseLeaveHandler = () => {
    setNavigationMeal({
      next: false,
      prev: false,
    });
  };

  return (
    <div className="flex items-center absolute top-1/2  -translate-y-1/2 right-6 gap-4 text-2xl text-black">
      <Link
        className="btn btn-primary flex group items-center justify-center rounded-full w-8 h-8 bg-primary-main hover:bg-primary-hover cursor-pointer hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("next")}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropLeftLine className="shrink-0" />
        {<PopupMeal meal={prevMeal} navigationMeal={navigationMeal} />}
      </Link>
      <Link
        className="btn btn-primary flex group items-center justify-center rounded-full w-8 h-8 bg-primary-main hover:bg-primary-hover cursor-pointer hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("prev")}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropRightLine className="shrink-0" />
        {<PopupMeal navigationMeal={navigationMeal} meal={nextMeal} />}
      </Link>
    </div>
  );
};

export default MealsNavigateBtns;
