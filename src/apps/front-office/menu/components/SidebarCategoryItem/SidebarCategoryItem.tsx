import { cn } from "apps/front-office/design-system/utils/cn";
import { Category } from "apps/front-office/utils/types";
import { filteredMealsAtom } from "../../atoms/filtered-meals-atom";
import { CategoryImage } from "../MenuSidebarSidebar";

export type SidebarCategoryItemProps = {
  // props go here
  category: Category;
};

export default function SidebarCategoryItem(props: SidebarCategoryItemProps) {
  const { category } = props;
  const activeCategory = filteredMealsAtom.use("activeCategory");

  return (
    <li className="mb-3">
      <button
        className={cn(
          "flex justify-between",
          activeCategory === category.id && "text-primary-main",
        )}
        onClick={() => {
          filteredMealsAtom.change("activeCategory", category.id);
        }}>
        <div className="flex flex-row">
          <CategoryImage categoryName={category.name} />
          <p>{category.name}</p>
        </div>
        <div>
          <p>({category.total ?? 0})</p>
        </div>
      </button>
    </li>
  );
}
