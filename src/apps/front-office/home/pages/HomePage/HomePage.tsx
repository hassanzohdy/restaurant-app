import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import InViewPort from "apps/front-office/design-system/components/InViewPort";
import PopularDishes from "apps/front-office/home/pages/HomePage/PopularDishes";
import Banners from "./components/Banners";
import HomeBanner from "./components/HomeBanner";
import LatestNews from "./components/LatestNews";
import MainSlider from "./components/MainSlider";
import Menu from "./components/Menu";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <MainSlider />
      <Menu />
      <Banners />
      <PopularDishes />
      <HomeBanner />
      <InViewPort component={<LatestNews />} />
    </>
  );
}
