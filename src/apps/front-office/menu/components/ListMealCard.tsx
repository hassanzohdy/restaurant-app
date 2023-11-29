import { FaBasketShopping } from "react-icons/fa6";
import { Meal } from "../pages/MealDetailsPage/utils/types";

export type ListMealCardProps = {
  meal: Meal;
};

export default function ListMealCard({ meal }: ListMealCardProps) {
  return (
    <div className="flex flex-row h-60 ml-10 mt-6 border-2 rounded-2xl">
      <div className="basis-1/4 h-full ">
        <img
          style={{ margin: "18px auto" }}
          src={meal.image.url}
          width={200}
          height={200}></img>
      </div>
      <div className="basis-3/4 pt-14 relative">
        <h2 className="font-bold">{meal.name}</h2>
        <p className="font-light mt-1 ">{meal.description}</p>
        <p className="font-bold mt-2 text-amber-400">€{meal.price}</p>
        <div className="w-12 h-12 rounded-2xl bg-amber-400 absolute bottom-2 right-2">
          <FaBasketShopping className="text-center align-middle text-xl mt-3 ml-3" />
        </div>
      </div>
    </div>
  );
}
