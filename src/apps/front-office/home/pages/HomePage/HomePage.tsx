import { trans } from "@mongez/localization";
import "./HomePage.scss";
import Helmet from "@mongez/react-helmet";
import PopularDishes from "./PopularDishes/PopularDishes";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <PopularDishes />
    </>
  );
}
