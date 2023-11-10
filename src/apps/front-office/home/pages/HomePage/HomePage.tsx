import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import PopularDishes from "apps/front-office/home/pages/HomePage/PopularDishes";
import Banners from "../../components/Banners";
import Hero from "../../components/Hero";
import Menus from "../../components/Menus";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <Hero />
      <Menus />
      <Banners />
      <PopularDishes />
    </>
  );
}
