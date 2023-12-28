export type SliderBannerProps = {
  banner: string;
};
export default function SliderBanner({ banner }: SliderBannerProps) {
  return (
    <div className="slider-banner">
      <img src={banner} className="w-full" alt="" />
    </div>
  );
}
