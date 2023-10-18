import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import styles from "./_PopularMealItems.module.scss";

export type PopularMealItemProps = {
  name: string;
  details: string;
  image: string;
};

export default function PopularMealItem({
  name,
  details,
  image,
}: PopularMealItemProps) {
  return (
    <>
      <div className={`${styles.popularMealItem}`}>
        <div className="container">
          <div className={`${styles.grid} grid sm:grid-cols-2 sm:gap-4`}>
            <div className="max-sm:order-last">
              <div className="details py-[50px]">
                <CommonTitle className="text-[25px] capitalize max-md:text-[20px]">
                  {trans("ourQuality")}
                </CommonTitle>
                <h2 className="text-[42px] font-bold mb-5 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
                  {trans(name)}
                </h2>
                <p className="text-[16px] text-gray-500 w-[76%] leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-normal">
                  {trans(details)}
                </p>
                <BaseLink
                  className="py-4 px-10 max-lg:py-3 max-lg:px-8"
                  variant="primary"
                  href={URLS.reservation}>
                  {trans("orderNow")}
                </BaseLink>
              </div>
            </div>
            <div>
              <div
                className={`${styles.image} flex items-center justify-center h-[100%] pt-[70px] pb-[130px] max-lg:p-0`}>
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
