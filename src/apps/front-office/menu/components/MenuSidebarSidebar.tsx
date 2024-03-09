import { trans } from "@mongez/localization";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import {
  filteredMealsAtom,
  toggleFilterAtom,
} from "../atoms/filtered-meals-atom";

import { Button } from "apps/front-office/design-system/components/Button";
import { price } from "apps/front-office/utils/price";
import { Category } from "apps/front-office/utils/types";
import "react-range-slider-input/dist/style.css";
import "./MenuSidebarSidebar.scss";
import SidebarCategoryItem from "./SidebarCategoryItem";
import UnselectCategoryButton from "./UnselectCategoryButton";

export type MenuSidebarProps = {
  categories: Category[];
  price: [number, number];
};

export default function MenuSidebar({
  price: incomingPrice,
  categories,
}: MenuSidebarProps) {
  const [value, setValue] = useState(incomingPrice);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    filteredMealsAtom.change("search", value);
  };

  const filterByPrice = (value: [number, number]) => {
    setValue(value);
    filteredMealsAtom.change("price", value);
  };

  const resetFilters = () => {
    filteredMealsAtom.change("search", "");
    filteredMealsAtom.change("price", incomingPrice);
    setValue(incomingPrice);
    filteredMealsAtom.change("activeCategory", 0);
  };

  return (
    <div className="flex flex-col sidebar">
      <div className=" md:hidden w-full flex justify-between">
        <Button
          variant="primary"
          className="self-start py-1 px-2"
          onClick={() => toggleFilterAtom.close()}>
          {trans("close")}
        </Button>
        <Button
          variant="secondary"
          className="self-start py-1 px-2 md:hidden text-white"
          onClick={resetFilters}>
          {trans("reset")}
        </Button>
      </div>
      <div>
        <input
          onChange={handleSearchChange}
          className="w-full h-12 border-2 capitalize rounded-2xl focus-within:border-primary-main mt-6 py-2 px-3"
          placeholder={trans("searchProducts")}
          value={filteredMealsAtom.use("search")}
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
        <RangeSlider
          min={incomingPrice[0]}
          max={incomingPrice[1]}
          value={value}
          onInput={filterByPrice}
        />
        <div className="mt-4">
          <p className="text-slate-600">{`Price: ${price(value[0])} - ${price(
            value[1],
          )}`}</p>
        </div>
      </div>

      <Button
        variant="secondary"
        className="self-start py-1 px-2 mt-5 hidden md:block text-white"
        onClick={resetFilters}>
        {trans("reset")}
      </Button>
    </div>
  );
}

export function CategoriesList({ categories }: { categories: Category[] }) {
  return (
    <ul role="list" className="categoryList rounded-2xl p-2">
      {categories.map((category, index) => {
        return <SidebarCategoryItem key={index} category={category} />;
      })}
    </ul>
  );
}
