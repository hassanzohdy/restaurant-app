import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";

export default function AboutUsWelcomeText() {
  return (
    <>
      <div className="about-us-welcome-text animate-fade w-[40%] max-xl:w-[45%] max-md:w-[100%] max-md:mb-10">
        <CommonTitle className="block text-[42px] capitalize mb-2 max-lg:text-[36px] max-sm:text-[30px]">
          {trans("welcome")}
        </CommonTitle>
        <h2 className="text-[60px] font-bold leading-none w-[92%] mb-5 max-[1399px]:text-[56px] max-[1399px]:w-[94%] max-xl:w-[86%] max-xl:text-[45px] max-lg:w-[98%] max-lg:text-[36px] max-sm:text-[34px]">
          {trans("Best burger ideas & traditions from the whole world")}
        </h2>
        <p className="text-[16px] text-gray-500 w-[95%] leading-loose mb-5 max-xl:w-[100%] max-xl:text-[15px] max-xl:mb-3 max-lg:w-[98%] max-lg:leading-normal">
          {trans("welcomeParagraph1")}
        </p>
        <p className="text-[16px] text-gray-500 w-[95%] leading-loose mb-7 max-xl:w-[100%] max-xl:text-[15px] max-xl:mb-5 max-lg:leading-normal">
          {trans("welcomeParagraph2")}
        </p>
        <BaseLink
          className="py-4 px-10 max-lg:py-3 max-lg:px-8"
          variant="primary"
          href={URLS.contactUs}>
          {trans("contactNow")}
        </BaseLink>
      </div>
    </>
  );
}
