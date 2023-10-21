import AboutWelcomeGallery from "./AboutUsWelcomeGallery";
import AboutWelcomeText from "./AboutUsWelcomeText";

export default function AboutUsWelcome() {
  return (
    <>
      <section className="about-us-welcome py-[100px] max-lg:pt-[80px] max-sm:lg-[40px] max-sm:py-[70px]">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <AboutWelcomeText />
            <AboutWelcomeGallery />
          </div>
        </div>
      </section>
    </>
  );
}
