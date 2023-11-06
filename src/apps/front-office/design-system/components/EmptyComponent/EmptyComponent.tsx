import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";
import { BaseLink } from "../Link";

export type EmptyComponentProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export default function EmptyComponent({
  title,
  description,
  icon,
}: EmptyComponentProps) {
  return (
    <div className="empty text-center py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
      <div className="container">
        <div className="empty-icon flex justify-center text-gray-200 mb-5 max-sm:mb-2">
          {icon}
        </div>
        <h2 className="title text-[42px] font-bold mb-3 max-md:text-[36px] max-sm:text-[30px] max-sm:mb-2">
          {title}
        </h2>
        <p className="text-[32px] text-gray-300 capitalize font-semibold mb-5 max-lg:text-[28px] max-md:text-[24px] max-sm:text-[20px]">
          {description}
        </p>
        <BaseLink
          href={URLS.home}
          variant="primary"
          className="px-6 py-4 text-[18px] max-sm:text-[16px] max-sm:px-4 max-sm:py-3">
          {trans("continueShopping")}
        </BaseLink>
      </div>
    </div>
  );
}
