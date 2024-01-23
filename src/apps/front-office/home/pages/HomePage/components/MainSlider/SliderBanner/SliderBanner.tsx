import { Link } from "@mongez/react-router";
import { Banner } from "apps/front-office/design-system/utils/types";
import URLS from "apps/front-office/utils/urls";

export type SliderBannerProps = {
  banner: Banner;
};
export default function SliderBanner({ banner }: SliderBannerProps) {
  return (
    <Link to={URLS.menu.list} className="slider-banner">
      <img src={banner.image.url} className="w-full" alt="" />
    </Link>
  );
}
