import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import MenuCategory from "./MenuCategory";

export default function Menu({ categories }: any) {
  return (
    <section className="menu text-center relative sm:top-[-26px] top-[-20px]">
      <div className="container">
        <BaseLink
          href={URLS.menu.list}
          variant="primary"
          className="inline-block px-6 py-2 sm:px-12 sm:py-4 text-[14px] font-semibold">
          {trans("menu")}
        </BaseLink>
        <div className="flex flex-row justify-center items-center gap-5 sm:gap-16 flex-wrap">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex items-center justify-center sm:w-fit w-[40%]">
              <MenuCategory key={index} category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
