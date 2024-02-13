import { trans } from "@mongez/localization";
import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { BsGrid, BsGridFill, BsList } from "react-icons/bs";
import { filteredMealsAtom } from "../atoms/filtered-meals-atom";

export default function ViewDisplayMode() {
  const { filteredMealsList, meals } = filteredMealsAtom.useValue();
  const displayMode = menuDisplayModeAtom.useValue();

  return (
    <div className="flex justify-between">
      <div className=" text-gray-400">
        {trans("showing")} ({filteredMealsList.length} - {meals.length})
      </div>
      <div className="flex flex-row gap-3 items-center">
        <button onClick={() => menuDisplayModeAtom.update("grid")}>
          {displayMode === "grid" ? (
            <BsGridFill className="text-xl mt-0.5" />
          ) : (
            <BsGrid className="text-xl text-gray-500" />
          )}
        </button>
        <button onClick={() => menuDisplayModeAtom.update("list")}>
          {displayMode === "list" ? (
            <BsList className="text-2xl font-black" />
          ) : (
            <BsList className="text-2xl text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
