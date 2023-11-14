import { Link } from "@mongez/react-router";
import { price } from "apps/front-office/utils/price";
import URLS from "apps/front-office/utils/urls";
import { searchMealsAtom } from "../../../../atoms/header-atoms";

export default function HeaderSearchFilter() {
  const meals = searchMealsAtom.useValue();

  return (
    <div className="bg-white w-full absolute left-0 top-[100px] px-5 max-h-[67vh] overflow-auto rounded-md">
      {meals?.map(meal => (
        <Link
          to={`/${URLS.menu.list}/${meal.id}/${meal.slug}`}
          key={meal.name}
          className="flex flex-row items-center py-5 border-b group">
          <img src={meal.image.url} alt={meal.name} className="w-28 mr-2" />
          <div className="flex flex-col">
            <span>{meal.name}</span>
            <span className="text-primary-main group-hover:text-primary-hover font-bold">
              {price(meal.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
