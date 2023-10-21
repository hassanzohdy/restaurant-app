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
      <div className={`${styles.popularMealItem} max-md:mb-14 max-md:last-of-type:mb-0`}>
        <div className="container">
          <div className={`${styles.itemWrapper} flex justify-between max-md:flex-col-reverse`}>
            <div className="w-[45%] max-xl:w-[48%] max-md:w-full">
              <div className="details pt-[100px] max-lg:pt-[50px] max-sm:pt-[30px]">
                <CommonTitle className="text-[25px] capitalize max-md:text-[20px]">
                  {trans("ourQuality")}
                </CommonTitle>
                <h2 className="text-[42px] font-bold mb-5 max-xl:mb-3 max-lg:text-[36px] max-md:text-[30px]">
                  {trans(name)}
                </h2>
                <p className="w-[80%] text-[16px] text-primary-text leading-loose mb-10 max-xl:text-[15px] max-xl:w-[90%] max-xl:mb-6 max-lg:w-[100%] max-lg:leading-normal">
                  {trans(details)}
                </p>
                <BaseLink
                  className="py-4 px-10 max-lg:py-3 max-lg:px-8"
                  variant="primary"
                  href={URLS.contactUs}>
                  {trans("orderNow")}
                </BaseLink>
              </div>
            </div>
            <div className="w-[53%] max-xl:w-[50%] max-md:w-full">
              <div
                className={`${styles.image} flex items-center justify-center h-[100%] pt-[70px] pb-[130px] max-xl:pb-[70px] max-md:pt-[40px] max-md:pb-0`}>
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
