import heroImg2 from "shared/assets/images/Hero/pexels-engin-akyurt-2347311.jpg";
import heroImg3 from "shared/assets/images/Hero/pexels-fauxels-3184192.jpg";
import heroImg from "shared/assets/images/Hero/pexels-pixabay-262978.jpg";

export default function Hero() {
  // const mobile = useMediaQuery("(max-width: 1000px)");
  // plugins={[autoplay.current]}
  // onMouseEnter={autoplay.current.stop}
  // onMouseLeave={autoplay.current.reset}
  return (
    <>
      <div>
        <div>
          <img src={heroImg} width="100%" height="100%" alt="heroImg" />
        </div>
        <img src={heroImg2} width="100%" height="100%" alt="heroImg" />
        <img src={heroImg3} width="100%" height="100%" alt="heroImg" />
      </div>
    </>
  );
}
