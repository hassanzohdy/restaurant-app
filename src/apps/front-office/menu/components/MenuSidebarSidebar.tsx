import { trans } from "@mongez/localization";
import { useState } from "react";
import { CiBowlNoodles, CiBurger, CiCoffeeCup, CiPizza } from "react-icons/ci";
import { TbCake } from "react-icons/tb";
import RangeSlider from "react-range-slider-input";
import { filteredMealsAtom } from "../atoms/filtered-meals-atom";

import { Category } from "apps/front-office/utils/types";
import "react-range-slider-input/dist/style.css";
import "./MenuSidebarSidebar.scss";
import SidebarCategoryItem from "./SidebarCategoryItem";
import UnselectCategoryButton from "./UnselectCategoryButton";

type MenuSidebarProps = {
  categories: Category[];
};

export default function MenuSidebar({ categories }: MenuSidebarProps) {
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
    const value = e.target.value.trim();

    //filterSearchMeals(value);
    filteredMealsAtom.change("search", value);
  };

  // function filterMeals(
  //   searchString: string,
  //   categoryType?: string,
  //   priceRange?: [number, number],
  // ) {
  //   //meals array from response
  //   //1- search input
  //   const regExp = new RegExp(search, "i");
  //   let filteredMeals = searchString
  //     ? meals.filter(
  //         meal => regExp.test(meal.name) || regExp.test(meal.description),
  //       )
  //     : meals;

  //   console.log(filteredMeals);

  //   //2- category filter
  //   filteredMeals = filteredMeals.filter(
  //     meal => meal.category.name === categoryType,
  //   );

  //   filteredMealsAtom.change("filteredMealsList", filteredMeals);
  // }

  return (
    <div className="flex flex-col sidebar">
      <div>
        <input
          onChange={handleSearchChange}
          className="w-full h-12 border-2 capitalize rounded-2xl focus-within:border-primary-main mt-6 py-2 px-3"
          placeholder={trans("searchProducts")}
        />
      </div>
      <div className="h-full border-2 rounded-2xl p-4 space-y-6 mt-8">
        <div className="flex justify-between gap-4">
          <h2 className="font-black text-lg">{trans("categories")}</h2>
          <UnselectCategoryButton />
        </div>
        <CategoriesList categories={categories} />
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

export function CategoriesList({ categories }: MenuSidebarProps) {
  return (
    <ul role="list" className="categoryList rounded-2xl p-2">
      {categories.map((category, index) => {
        return <SidebarCategoryItem key={index} category={category} />;
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
