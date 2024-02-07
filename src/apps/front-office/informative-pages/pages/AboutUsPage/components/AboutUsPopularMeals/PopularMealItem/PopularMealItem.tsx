import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import styles from "./PopularMealItems.module.scss";

export default function PopularMealItem({ meal }) {
  const { name, description, image } = meal;
  return (
    <div
      className={`${styles.popularMealItem} max-md:mb-14 max-md:last-of-type:mb-0 container`}>
      <div
        className={`${styles.itemWrapper} flex justify-between items-center`}>
        <div className="w-[45%] max-xl:w-[48%] max-md:w-full mx-auto">
          <div className={` ${styles.itemWrapper}`}>
            <CommonTitle className="text-[25px] text-primary-main capitalize max-md:text-[20px]">
              {trans("ourQuality")}
            </CommonTitle>
            <h2 className="text-[42px] font-bold mb-5 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
              {trans(name)}
            </h2>
            <p className="w-[80%] text-[16px] text-primary-text leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-norma line-clamp-4">
              {trans(description)}
            </p>
            <BaseLink
              className="py-4 px-10 max-lg:py-3 max-lg:px-8"
              variant="primary"
              href={URLS.menu.viewMeal(meal)}>
              {trans("orderNow")}
            </BaseLink>
          </div>
        </div>
        <img
          src={image.url}
          alt={name}
          title={name}
          className={`${styles.image} w-[500px] flex items-center justify-center max-md:pb-0 mx-auto`}
        />
      </div>
    </div>
  );
}
