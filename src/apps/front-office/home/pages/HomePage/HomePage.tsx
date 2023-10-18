import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import PopularDishes from "apps/front-office/home/pages/HomePage/PopularDishes";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <PopularDishes />
    </>
  );
}
