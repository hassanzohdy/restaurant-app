import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useState } from "react";
import { CiBowlNoodles, CiBurger, CiCoffeeCup, CiPizza } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { TbCake } from "react-icons/tb";
import RangeSlider from "react-range-slider-input";
import { filteredMealsAtom } from "../atoms/filtered-meals-atom";

import "react-range-slider-input/dist/style.css";
import "./MenuSidebarSidebar.scss";

type MenuSidebarProps = {
  categoriesDic: { [key: string]: number };
  onCategorySelect: (cat: string) => void;
};

export default function MenuSidebar({
  categoriesDic,
  onCategorySelect,
}: MenuSidebarProps) {
  const [search, setSearch] = useState("");
  const { meals } = filteredMealsAtom.value;
  const activeCategory = filteredMealsAtom.use("activeCategory");
  const [value, setValue] = useState([25, 100]);

  const filterSearchMeals = (query: string) => {
    const regExp = new RegExp(query, "i");
    const filteredMeals = query
      ? meals.filter(
          meal => regExp.test(meal.name) || regExp.test(meal.description),
        )
      : meals;

    filteredMealsAtom.change("filteredMealsList", filteredMeals);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    filterSearchMeals(value);
    setSearch(value);
  };

  return (
    <div className="flex flex-col sidebar">
      <div>
        <input
          value={search}
          onChange={handleSearchChange}
          className="w-full h-12 border-2 capitalize rounded-2xl focus-within:border-primary-main mt-6 py-2 px-3"
          placeholder={trans("searchProducts")}
        />
      </div>
      <div className="h-full  border-2 rounded-2xl p-4 space-y-6 mt-8">
        <div className="flex justify-between gap-4">
          <h2 className="font-black text-lg">{trans("categories")}</h2>
          {activeCategory !== "" && (
            <button
              className="bg-primary-main/60 hover:bg-primary-main transition-colors rounded-full w-6 h-6 p-1"
              onClick={() => {
                onCategorySelect("");
                filteredMealsAtom.change("activeCategory", "");
                queryString.update({});
              }}>
              <MdOutlineClose />
            </button>
          )}
        </div>
        <CategoriesList
          categoriesDic={categoriesDic}
          onCategorySelect={onCategorySelect}
        />
      </div>
      <div className="mt-8">
        <h2 className="font-black text-lg mb-4">{trans("filterByPrice")}</h2>
        <RangeSlider value={value} onInput={setValue} />
        <div className="mt-4">
          <p className="text-slate-600">{`Price: $ ${value[0]} - ${value[1]}`}</p>
          <button className="bg-primary-main hover:bg-primary-main transition-colors rounded-[10px] px-3 py-1 mt-4 font-medium text-sm">
            Filter
          </button>
        </div>
      </div>

      {/* <div className="mt-6">
        <BestDealItemList />
      </div> */}
    </div>
  );
}

export function CategoriesList({
  categoriesDic,
  onCategorySelect,
}: MenuSidebarProps) {
  const keysArr = Object.keys(categoriesDic);
  // const [activeCategory, setActiveCategory] = useState(
  //   queryString.get("cat") || "",
  // );
  const activeCategory = filteredMealsAtom.use("activeCategory");

  return (
    <ul role="list" className="categoryList rounded-2xl p-2">
      {keysArr.map((category, index) => {
        return (
          <li key={index} className="mb-3">
            <button
              className={cn(
                "flex justify-between",
                activeCategory === category && "text-primary-main",
              )}
              onClick={() => {
                onCategorySelect(category);
                filteredMealsAtom.change("activeCategory", category);
                queryString.update({ cat: category });
              }}>
              <div className="flex flex-row">
                <CategoryImage categoryName={category} />
                <p>{category}</p>
              </div>
              <div>
                <p>({categoriesDic[category] ?? 0})</p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function CategoryImage(props: { categoryName: string }) {
  const iconClassName = "text-2xl mr-2";
  switch (props.categoryName) {
    case "Burgers":
      return <CiBurger className={iconClassName} />;
    case "Cold Drinks":
      return <CiCoffeeCup className={iconClassName} />;
    case "Hot Drinks":
      return <CiCoffeeCup className={iconClassName} />;
    case "Pasta":
      return <CiBowlNoodles className={iconClassName} />;
    case "Pizza":
      return <CiPizza className={iconClassName} />;
    case "Cake":
      return <TbCake className={iconClassName} />;
  }
}
