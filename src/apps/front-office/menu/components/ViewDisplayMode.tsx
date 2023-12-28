import { trans } from "@mongez/localization";
import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { BsGrid, BsGridFill, BsList } from "react-icons/bs";
import { filteredMealsAtom } from "../atoms/filtered-meals-atom";

export default function ViewDisplayMode() {
  const { filteredMealsList, meals } = filteredMealsAtom.useValue();
  const displayMode = menuDisplayModeAtom.useValue();

  return (
    <>
      <div className="float-left text-gray-400 pl-9">
        {trans("showing")} ({filteredMealsList.length} - {meals.length})
      </div>
      <div className="flex flex-row justify-end">
        <button onClick={() => menuDisplayModeAtom.update("grid")}>
          {displayMode === "grid" ? (
            <BsGridFill className="text-xl mt-0.5 mr-3" />
          ) : (
            <BsGrid className="text-xl mt-0.5 mr-3 text-gray-500" />
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
    </>
  );
}
