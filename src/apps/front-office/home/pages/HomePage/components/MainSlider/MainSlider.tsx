import Slider from "react-slick";

import banner1 from "assets/images/main-slider/slide1.png";
import banner2 from "assets/images/main-slider/slide2.png";
import banner3 from "assets/images/main-slider/slide3.png";
import banner4 from "assets/images/main-slider/slide4.png";
import banner5 from "assets/images/main-slider/slide5.png";
import banner6 from "assets/images/main-slider/slide6.png";
import SliderBanner from "./SliderBanner";

const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

export default function MainSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slick-slider">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <SliderBanner key={index} banner={banner} />
        ))}
      </Slider>
    </section>
  );
}
