import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Slider from "react-slick";
import heroImg2 from "shared/assets/images/Hero/pexels-engin-akyurt-2347311.jpg";
import heroImg3 from "shared/assets/images/Hero/pexels-fauxels-3184192.jpg";
import heroImg from "shared/assets/images/Hero/pexels-pixabay-262978.jpg";
import styles from "../../../informative-pages/pages/AboutUsPage/components/AboutUsTestimonials/_AboutUsTestimonials.module.scss";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <span>
        <i className={`${styles.slickArrow}`}>
          <IconChevronRight
            className="text-white hover:text-[#fff] duration-500 transition-all ease-in-out"
            stroke="2"
            size="30"
          />
        </i>
      </span>
    ),
    prevArrow: (
      <span>
        <i className={`${styles.slickArrow}`}>
          <IconChevronLeft
            className="text-[#ffffff42] hover:text-[#fff] duration-500 transition-all ease-in-out"
            stroke="2"
            size="30"
          />
        </i>
      </span>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={heroImg} width="100%" height="100%" alt="heroImg" />
        </div>
        <div>
          <img src={heroImg2} width="100%" height="100%" alt="heroImg" />
        </div>
        <div>
          <img src={heroImg3} width="100%" height="100%" alt="heroImg" />
        </div>
      </Slider>
    </>
  );
}
