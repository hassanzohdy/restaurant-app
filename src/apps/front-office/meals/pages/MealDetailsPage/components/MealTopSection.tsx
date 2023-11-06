import { BreadCrumbs } from "apps/front-office/meals/components/BreadCrumbs";
import { PopupMealType } from "../utils/types";
import MealsNavigateBtns from "./MealsNavigateBtns";

type Props = {
  nexMeal: PopupMealType;
  prevMeal: PopupMealType;
};

const MealTopSection = ({ nexMeal, prevMeal }: Props) => {
  return (
    <section className="bg-primary-light py-6 text-primary-text relative">
      <div className="container flex justify-between">
        <img
          src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/breadcrumb1.jpg"
          alt="Breadcrumbs background image"
          className="absolute h-full inset-0 w-full object-cover"
          aria-hidden="true"
        />
        <BreadCrumbs />
        <MealsNavigateBtns nextMeal={nexMeal} prevMeal={prevMeal} />
      </div>
    </section>
  );
};

export default MealTopSection;
