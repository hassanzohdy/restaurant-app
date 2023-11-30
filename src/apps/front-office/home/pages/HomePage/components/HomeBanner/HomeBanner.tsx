import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";

export default function HomeBanner() {
  return (
    <section className="py-[140px] bg-[url('assets/images/home-banner/banner-bg.png')] bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <div className="info w-[226px] m-auto h-[216px] flex flex-col pt-[40px] text-[40px] font-bold text-center leading-[.9] bg-[url('assets/images/home-banner/info-bg.png')] bg-no-repeat border-spacing-x-1 relative top-[-30px] ltr:left-[30px] rlt:right-[30px]">
              <CommonTitle className="text-[14px] capitalize mb-1 ml-[-40px]">
                {trans("getUpTo")}
              </CommonTitle>
              <span className="text-primary-main ml-[-40px]">50%</span>
              <span className="uppercase ml-[-40px]">off</span>
            </div>
          </div>
          <div className="pl-28">
            <CommonTitle className="text-[42px] text-white capitalize drop-shadow-lg mb-1">
              {trans("hotFresh")}
            </CommonTitle>
            <h2 className="text-[120px] text-primary-main uppercase font-semibold mt-[-20px] mb-10 drop-shadow-lg leading-none">
              {trans("hotdog")}
            </h2>
            <BaseLink
              href={URLS.menu.list}
              className="px-12 py-4 bg-white shadow-lg hover:bg-primary-main">
              {trans("orderNow")}
            </BaseLink>
          </div>
        </div>
      </div>
    </section>
  );
}
