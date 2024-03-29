import client3 from "assets/images/about-us/client-3.jpg";
import Slider from "react-slick";
import AboutUsTestimonialsItem from "./AboutUsTestimonialsItem";
import styles from "./_AboutUsTestimonials.module.scss";

export default function AboutUsTestimonials() {
  const testimonials = [
    {
      name: "Stephen Bindle",
      job: "CEO,apple",
      feedback:
        "“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples” ",
      image: client3,
      ratings: 4,
    },
    {
      name: "Nina Margaret",
      job: "CEO,apple",
      feedback:
        "I would be lost without restaurant. I would like to personally thank you for your outstanding product.",
      image: client3,
      ratings: 4,
    },
    {
      name: "Clara",
      job: "Manager",
      feedback:
        "I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful.",
      image: client3,
      ratings: 5,
    },
    {
      name: "John Doe",
      job: "Manager",
      feedback:
        "Without food, we would have gone bankrupt by now. Thanks food! The service was excellent.",
      image: client3,
      ratings: 3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className={`${styles.aboutUsTestimonials} relative pt-[100px] pb-[150px] text-[#fff] max-lg:pt-[80px] max-lg:pb-[130px] max-sm:pt-[70px] max-sm:pb-[100px]`}>
      <div className="container">
        <div className="w-[85%] m-auto max-sm:w-full">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <AboutUsTestimonialsItem itemDetails={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
