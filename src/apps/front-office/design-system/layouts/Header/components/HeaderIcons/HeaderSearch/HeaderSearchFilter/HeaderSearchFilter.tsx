import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import {
  searchInputAtom,
  toggleGroupAtom,
} from "../../../../atoms/header-atoms";
import useSearchMeals from "./useSearchMeals/useSearchMeals";

export default function HeaderSearchFilter() {
  const searchInput = searchInputAtom.useValue();
  const isSearchOpened = toggleGroupAtom.useValue().headerSearch;

  const { meals, error } = useSearchMeals(searchInput, isSearchOpened);

  if (error) {
    return <div>{error}</div>;
  }

  if (meals?.length === 0 && searchInput.trim() !== "") {
    return (
      <h1 className="bg-white w-full absolute left-0 top-[100px] p-5">
        {trans("noResults")}
      </h1>
    );
  }

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
              £{meal.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
