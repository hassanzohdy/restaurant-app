import AboutWelcomeGallery from "./AboutUsWelcomeGallery";
import AboutWelcomeText from "./AboutUsWelcomeText";

export default function AboutUsWelcome() {
  return (
    <>
      <section className="about-us-welcome pt-[100px] pb-[50px] max-lg:pt-[80px] max-sm:lg-[40px] max-sm:pt-[70px] max-sm:pb-[35px]">
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
