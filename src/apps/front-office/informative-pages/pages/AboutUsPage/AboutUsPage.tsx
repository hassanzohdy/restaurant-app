import Helmet from "@mongez/react-helmet";
import BreadCrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import styles from "./_AboutUsPage.module.scss";
import AboutUsOurChefs from "./components/AboutUsChefs/AboutUsChefs";
import AboutUsOrderNow from "./components/AboutUsOrderNow";
import AboutUsPopularMeals from "./components/AboutUsPopularMeals";
import AboutUsTestimonials from "./components/AboutUsTestimonials";
import AboutUsWelcome from "./components/AboutUsWelcome";
import AboutUsVideo from "./components/AboutUsVideo";

export default function AboutUsPage() {
  return (
    <>
      <Helmet title="About Us" />
      <div className={`${styles.aboutUsPage}`}>
        <BreadCrumb title="about" navItems={[{ name: "about" }]} />
        <AboutUsWelcome />
        <AboutUsVideo/>
        <AboutUsPopularMeals />
        <AboutUsTestimonials />
        <AboutUsOurChefs />
        <AboutUsOrderNow />
      </div>
    </>
  );
}
