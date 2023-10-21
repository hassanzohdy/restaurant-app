import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import styles from "./_AboutUsOrderNow.module.scss";

export default function AboutUsOrderNow() {
  return (
    <>
      <div
        className={`${styles.aboutUsOrderNow} py-[128px] max-lg:py-[80px] max-sm:py-[70px]`}>
        <div className="container text-center">
          <CommonTitle className="text-[32px] capitalize mb-1 max-sm:text-[25px]">
            {trans("WeGuarantee")}
          </CommonTitle>
          <h2 className="text-[60px] font-bold leading-none mb-4 max-xl:text-[54px]  max-lg:text-[40px] max-sm:text-[28px] max-sm:mb-3">
            30 {trans("minutesDelivery")}!
          </h2>
          <p className="text-[15px] text-primary-text max-w-[40%] mx-auto mb-8 leading-loose max-lg:max-w-[60%] max-sm:max-w-[300px]">
            {trans("orderNowText")}
          </p>
          <BaseLink
            className="py-4 px-10 max-lg:py-3 max-lg:px-8"
            variant="primary"
            href={URLS.contactUs}>
            {trans("makeAnOrder")}
          </BaseLink>
        </div>
      </div>
    </>
  );
}
