import { navigateTo } from "@mongez/react-router";
import { ImageType } from "apps/front-office/design-system/utils/types";
import { filteredMealsAtom } from "apps/front-office/menu/atoms/filtered-meals-atom";
import URLS from "apps/front-office/utils/urls";
import hoverImage from "assets/images/menu/category-bg.png";

export type MenuCategoryProps = {
  category: {
    id: number;
    name: string;
    image: ImageType;
  };
};
export default function MenuCategory({ category }: MenuCategoryProps) {
  const handelCategoryClick = () => {
    navigateTo(URLS.menu.list);
    filteredMealsAtom.change("activeCategory", category.id);
  };

  return (
    <button
      onClick={handelCategoryClick}
      className="mt-4 flex-col group transition-all ease-in-out duration-500 ">
      <div className={`relative duration-700`}>
        <div className="absolute transition-all duration-500 opacity-0 w-[0px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] group-hover:opacity-100 group-hover:w-[200px] flex justify-center items-center">
          <img src={hoverImage} />
        </div>
        <img
          src={category.image.url}
          alt={category.name}
          className={`max-w-36 min-h-10 h-[80px] sm:max-h-[100px]`}
        />
      </div>
      <h3 className="title text-[13px] uppercase font-bold group-hover:text-primary-hover transition-all duration-700">
        {category.name}
      </h3>
    </button>
  );
}
