
import { trans } from "@mongez/localization";
import { BaseLink } from "apps/front-office/design-system/components/Link";
import URLS from "apps/front-office/utils/urls";
import styles from "./_AboutUsVideo.module.scss";
import AboutUsVideoButton from "./AboutUsVideoButton";
import Modal from "apps/front-office/design-system/components/Modal/Modal";

export default function AboutUsVideo() {
  return (
    <>
      <section className={`${styles.aboutUsVideo} py-[100px] text-center text-white relative max-lg:py-[80px] max-sm:py-[70px]`}>
        <div className="container relative">
          <AboutUsVideoButton/>
          <h2 className="text-[52px] font-bold capitalize mb-5 max-xl:text-[48px] max-lg:text-[40px] max-md:text-[32px] max-md:mb-2 max-sm:text-[28px] max-sm:leading-tight leading-tight">{trans('aboutUsVideoHeading')}</h2>
          <p className="text-[22px] mb-9 max-md:text-[18px] max-md:mb-8 max-sm:text-[14px]">{trans('aboutUsVideoText')}</p>
          <BaseLink
            className="py-4 px-10 max-lg:py-3 max-lg:px-8 uppercase text-dark]"
            variant="primary"
            href={URLS.contactUs}>
            {trans("orderNow")}
          </BaseLink>
        </div>
      </section>
      <Modal variant="video"><iframe className="w-full h-[600px] max-lg:h-[450px] max-sm:h-[300px]" src="https://www.youtube.com/embed/pOn1sKSiyfs"></iframe></Modal>
    </>
  )
}
