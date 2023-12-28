import { cn } from "apps/front-office/design-system/utils/cn";
import { Category } from "apps/front-office/utils/types";
import { filteredMealsAtom } from "../../atoms/filtered-meals-atom";

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
        <div className="flex flex-row items-center gap-2">
          <img
            src={category.icon.url}
            alt={category.name}
            width={15}
            height={15}
          />
          <p>{category.name}</p>
        </div>
        <div>
          <p>({category.total ?? 0})</p>
        </div>
      </button>
    </li>
  );
}
