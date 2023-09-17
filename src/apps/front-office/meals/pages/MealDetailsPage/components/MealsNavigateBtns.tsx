import { Link } from "@mongez/react-router";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { PopupMealType } from "../MealDetailsPage";

type Props = {
  nextMeal: PopupMealType;
  prevMeal: PopupMealType;
};

const PopupMeal = ({ meal }: { meal: PopupMealType }) => {
  const displayedPrice = formatPrice(meal.price);

  const displayedSale = formatPrice(meal.sale);

  return (
    <div className="w-max text-sm z-10 shadow-lg flex gap-4 absolute top-[calc(100%+3px)] right-0  p-4 rounded-xl bg-white">
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
              displayedSale
                ? "text-black line-through"
                : "text-primary-orange-400"
            }`}>
            {displayedPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

const MealsNavigateBtns = ({ nextMeal, prevMeal }: Props) => {
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
    <div className="flex items-center relative gap-4 text-2xl text-black">
      <Link
        className="btn btn-primary rounded-full w-8 h-8 hover:bg-primary-orange-500 hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("next")}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropLeftLine className="shrink-0" />
        {navigationMeal.next ? <PopupMeal meal={prevMeal} /> : null}
      </Link>
      <Link
        className="btn btn-primary rounded-full w-8 h-8 hover:bg-primary-orange-500 hover:text-black relative"
        onMouseOver={() => mouseEnterHandler("prev")}
        onMouseLeave={mouseLeaveHandler}>
        <RiArrowDropRightLine className="shrink-0" />
        {navigationMeal.prev ? <PopupMeal meal={nextMeal} /> : null}
      </Link>
    </div>
  );
};

export default MealsNavigateBtns;
