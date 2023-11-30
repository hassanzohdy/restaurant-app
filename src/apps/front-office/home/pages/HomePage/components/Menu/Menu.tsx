import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import boxMealsImg from "shared/assets/images/menu/box-meals.png";
import burgerImg from "shared/assets/images/menu/burger.png";
import chickenImg from "shared/assets/images/menu/chicken.png";
import comBoImg from "shared/assets/images/menu/combo.png";
import drinksImg from "shared/assets/images/menu/drinks.png";
import kidsMenusImg from "shared/assets/images/menu/kids-menus.png";
import pizzaImg from "shared/assets/images/menu/pizza.png";
import saucesImg from "shared/assets/images/menu/sauces.png";
import MenuCategory from "./MenuCategory";

const menuData = [
  {
    id: 1,
    title: "ComBo",
    image: comBoImg,
  },
  {
    id: 2,
    title: "Kids menus",
    image: kidsMenusImg,
  },
  {
    id: 3,
    title: "Pizza",
    image: pizzaImg,
  },
  {
    id: 4,
    title: "Box Meals",
    image: boxMealsImg,
  },
  {
    id: 5,
    title: "Burger",
    image: burgerImg,
  },
  {
    id: 6,
    title: "Chicken",
    image: chickenImg,
  },
  {
    id: 7,
    title: "Sauces",
    image: saucesImg,
  },
  {
    id: 8,
    title: "Drinks",
    image: drinksImg,
  },
];

export default function Menu() {
  return (
    <section className="menu text-center relative top-[-27px]">
      <div className="container">
        <BaseLink
          href={URLS.menu.list}
          variant="primary"
          className="inline-block px-12 py-4 min-h-[54px] text-[14px] font-semibold">
          {trans("menu")}
        </BaseLink>
        <div className="flex justify-around items-end py-10">
          {menuData.map((category, index) => (
            <div
              key={category.id}
              className="w-[10%] flex items-center justify-center">
              <MenuCategory key={index} category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
