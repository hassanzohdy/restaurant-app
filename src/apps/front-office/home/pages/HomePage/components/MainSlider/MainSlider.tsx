import { Banner } from "apps/front-office/design-system/utils/types";
import Slider from "react-slick";
import SliderBanner from "./SliderBanner";

export type MainSliderProps = {
  slider: {
    banners: Banner[];
  };
};

export default function MainSlider({ slider }: MainSliderProps) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slick-slider">
      <Slider {...settings}>
        {slider.banners.map((banner, index) => (
          <SliderBanner key={index} banner={banner} />
        ))}
      </Slider>
    </section>
  );
}
