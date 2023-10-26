import { Link } from "@mongez/react-router";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import styles from "./_AboutUsChefsItem.module.scss";

export type AboutUsChefsItemProps = {
  chefInfo: {
    name: string;
    position: string;
    details: string;
    image: string;
    socialLinks: { facebook: string; twitter: string; instagram: string };
  };
};

export default function AboutUsChefsItem({ chefInfo }: AboutUsChefsItemProps) {
  return (
    <>
      <div
        className={`${styles.chefItem} bg-[#fff] text-center rounded-md overflow-hidden max-sm:max-w-[485px] max-sm:m-auto max-sm:mb-10 last:mb-0`}>
        <div
          className={`${styles.image} h-[485px] relative overflow-hidden max-xl:h-[320px] max-lg:h-[280px] max-sm:h-[300px]`}>
          <img className="w-full h-full" src={chefInfo.image} alt="" />
        </div>
        <div
          className={`${styles.details} p-8 pt-0 max-lg:px-4 max-md:px-3 max-md:pb-5 `}>
          <span
            className={`${styles.chefPosition} inline-block text-[14px] uppercase rounded-[4px] px-[15px] py-[6px] mb-1 relative top-[-17px] max-lg:mb-0`}>
            {chefInfo.position}
          </span>
          <h3 className="text-[18px] font-bold uppercase mb-4 max-lg:text-[16px] max-lg:mb-2">
            {chefInfo.name}
          </h3>
          <p className="text-[15px] text-primary-text mb-4 max-lg:text-[14px]">
            {chefInfo.details}
          </p>
          <ul className="flex items-center justify-center">
            <Link
              to={chefInfo.socialLinks.facebook}
              className="mx-1 hover:text-primary-main transition-all duration-1000">
              <IconBrandFacebook size={18} />
            </Link>
            <Link
              to={chefInfo.socialLinks.facebook}
              className="mx-1 hover:text-primary-main transition-all duration-1000">
              <IconBrandX size={18} />
            </Link>
            <Link
              to={chefInfo.socialLinks.facebook}
              className="mx-1 hover:text-primary-main transition-all duration-1000">
              <IconBrandInstagram size={18} />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
