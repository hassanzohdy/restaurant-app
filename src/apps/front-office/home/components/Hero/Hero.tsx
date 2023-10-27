import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import heroImg2 from "shared/assets/images/Hero/pexels-engin-akyurt-2347311.jpg";
import heroImg3 from "shared/assets/images/Hero/pexels-fauxels-3184192.jpg";
import heroImg from "shared/assets/images/Hero/pexels-pixabay-262978.jpg";

export default function Hero() {
  const mobile = useMediaQuery("(max-width: 1000px)");
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  // plugins={[autoplay.current]}
  // onMouseEnter={autoplay.current.stop}
  // onMouseLeave={autoplay.current.reset}
  return (
    <>
      <div>
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withIndicators
          height={mobile ? 300 : 550}
          loop
          styles={{
            control: {
              color: "white",
              width: "1.5rem",
              height: "4rem",
              border: "2px solid white",
            },
          }}>
          <Carousel.Slide h="100%">
            <div>
              <img src={heroImg} width="100%" height="100%" alt="heroImg" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <Box>
              <img src={heroImg2} width="100%" height="100%" alt="heroImg" />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <Box>
              <img src={heroImg3} width="100%" height="100%" alt="heroImg" />
            </Box>
          </Carousel.Slide>
        </Carousel>
      </div>
    </>
  );
}
