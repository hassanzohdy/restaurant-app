import { Link } from "@mongez/react-router";
import { ImageType } from "apps/front-office/design-system/utils/types";
import URLS from "apps/front-office/utils/urls";

export type MenuCategoryProps = {
  category: {
    id: number;
    name: string;
    image: ImageType;
  };
};
export default function MenuCategory({ category }: MenuCategoryProps) {
  const categoryBefore =
    "before:block before:duration-700 before:transition-all before:ease-in-out before:w-[173px] before:h-[79px] before:m-auto before:bg-[url('assets/images/menu/category-bg.png')] before:bg-no-repeat before:absolute before:top-0 before:bottom-0 before:left-[50%] before:z-[-1] before:translate-x-[-50%] before:opacity-0";
  return (
    <Link
      to={URLS.menu.list}
      className={`menu-category flex-col relative hover:text-primary duration-700 transition-all ease-in-out ${categoryBefore}  hover:before:opacity-100`}>
      <span className="image block max-w-[120px] mb-1">
        <img src={category.image.url} alt={category.name} className="w-full" />
      </span>
      <h3 className="title text-[13px] uppercase font-bold">{category.name}</h3>
    </Link>
  );
}
