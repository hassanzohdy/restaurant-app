import { MdOutlineClose } from "react-icons/md";
import { filteredMealsAtom } from "../../atoms/filtered-meals-atom";

export default function UnselectCategoryButton() {
  const activeCategory = filteredMealsAtom.use("activeCategory");

  if (!activeCategory) return null;

  return (
    <button
      className="bg-primary-main/60 hover:bg-primary-main transition-colors rounded-full w-6 h-6 p-1"
      onClick={() => {
        filteredMealsAtom.change("activeCategory", 0);
      }}>
      <MdOutlineClose />
    </button>
  );
}
