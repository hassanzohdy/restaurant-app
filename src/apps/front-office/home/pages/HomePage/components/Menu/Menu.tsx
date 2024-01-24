import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import MenuCategory from "./MenuCategory";

export default function Menu({ categories }: any) {
  return (
    <section className="menu text-center relative top-[-27px]">
      <div className="container">
        <BaseLink
          href={URLS.menu.list}
          variant="primary"
          className="inline-block px-12 py-4 min-h-[54px] text-[14px] font-semibold">
          {trans("menu")}
        </BaseLink>
        <div className="flex flex-row justify-center items-center gap-16">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex items-center justify-center ">
              <MenuCategory key={index} category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
