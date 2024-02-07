import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import AboutUsVideoButton from "./AboutUsVideoButton";
import styles from "./_AboutUsVideo.module.scss";

export default function AboutUsVideo() {
  return (
    <section
      className={`${styles.aboutUsVideo} relative text-center text-white max-lg:py-[80px] max-sm:py-[70px] h-[70svh] flex items-center justify-center`}>
      <div className="container h-fit relative">
        <AboutUsVideoButton />
        <h2 className="text-[52px] font-bold capitalize mb-5 max-xl:text-[48px] max-lg:text-[40px] max-md:text-[32px] max-md:mb-2 max-sm:text-[28px] max-sm:leading-tight leading-tight">
          {trans("aboutUsVideoHeading")}
        </h2>
        <p className="text-[22px] mb-9 max-md:text-[18px] max-md:mb-8 max-sm:text-[14px]">
          {trans("aboutUsVideoText")}
        </p>
        <BaseLink
          className="py-4 px-10 max-lg:py-3 max-lg:px-8 uppercase text-black"
          variant="primary"
          href={URLS.menu.list}>
          {trans("orderNow")}
        </BaseLink>
      </div>
    </section>
  );
}
