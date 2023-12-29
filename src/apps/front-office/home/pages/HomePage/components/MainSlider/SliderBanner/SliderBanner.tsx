import { Banner } from "apps/front-office/design-system/utils/types";

export type SliderBannerProps = {
  banner: Banner;
};
export default function SliderBanner({ banner }: SliderBannerProps) {
  return (
    <div className="slider-banner">
      <img src={banner.image.url} className="w-full" alt="" />
    </div>
  );
}
