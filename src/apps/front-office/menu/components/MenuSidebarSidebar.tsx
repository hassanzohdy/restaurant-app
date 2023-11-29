import { CiBowlNoodles, CiBurger, CiCoffeeCup, CiPizza } from "react-icons/ci";
import { TbCake } from "react-icons/tb";

import { BestDealItemList } from "./BestDealItem";
import "./MenuSidebarSidebar.scss";

type MenuSidebarProps = {
  categories: any;
  onCategorySelect: (cat: string) => void;
};

export default function MenuSidebar(props: MenuSidebarProps) {
  const { categories } = props;

  return (
    <div className="flex flex-col sidebar">
      <div className="h-full  border-2 rounded-2xl">
        <h2 className="font-black my-4 ml-4 text-lg">Categories</h2>
        {/* Category list component takes categories object (key-CategoryName: value-CategoryCount) from parent component
        and loop on it to create category list */}
        <CateogoryList
          categories={categories}
          onCategorySelect={props.onCategorySelect}
        />
      </div>
      <div>
        <input
          className="w-full h-12 border-2 rounded-2xl border-amber-400 mt-6 py-2 px-3"
          placeholder="Search products..."
        />
      </div>
      <div className="mt-6">
        <BestDealItemList />
      </div>
    </div>
  );
}

export function CateogoryList(props: MenuSidebarProps) {
  const { categories } = props;
  const keysArr = Object.keys(categories);

  return (
    <ul role="list" className="m-4 p-4 categoryList rounded-2xl">
      {keysArr.map((category, index) => {
        return (
          <li key={index} className="mb-3">
            <button
              className="flex justify-between"
              onClick={() => props.onCategorySelect(category)}>
              <div className="flex flex-row">
                <CategoryImage categoryName={category} />
                <p>{category}</p>
              </div>
              <div>
                <p>({categories[category] ?? 0})</p>
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
