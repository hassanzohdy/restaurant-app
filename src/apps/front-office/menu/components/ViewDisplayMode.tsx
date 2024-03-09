import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";
import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { BsGrid, BsGridFill, BsList } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import {
  filteredMealsAtom,
  toggleFilterAtom,
} from "../atoms/filtered-meals-atom";

export default function ViewDisplayMode() {
  const { filteredMealsList, meals } = filteredMealsAtom.useValue();
  const displayMode = menuDisplayModeAtom.useValue();
  const openMenuFilter = toggleFilterAtom.get("open");

  return (
    <div className="flex justify-between items-center">
      <div className="md:hidden">
        <Button
          className="bg-primary-main hover:bg-primary-hover py-1 px-2"
          onClick={openMenuFilter}>
          <p className="rtl:pl-1 ltr:pr-1">{trans("filter")}</p>
          <CiFilter />
        </Button>
      </div>
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
