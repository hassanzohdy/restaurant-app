import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.scss";
import PopularDishes from "./PopularDishes/PopularDishes";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <PopularDishes />
    </>
  );
}
