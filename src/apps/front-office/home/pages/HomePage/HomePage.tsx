import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { toastError } from "apps/front-office/account/hooks/useToastMessage";
import InViewPort from "apps/front-office/design-system/components/InViewPort";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import PopularDishes from "apps/front-office/home/pages/HomePage/components/PopularDishes";
import { getHome } from "apps/front-office/home/services/home-service";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import { useState } from "react";
import { popularDishesAtom } from "../../atoms/popular-dishes-atom";
import Banners from "./components/Banners";
import HomeBanner from "./components/HomeBanner";
import LatestNews from "./components/LatestNews";
import MainSlider from "./components/MainSlider";
import Menu from "./components/Menu";

export default function HomePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const settings = settingsAtom.use("general");

  useOnce(() => {
    getHome()
      .then(response => {
        setData(response.data);
        popularDishesAtom.change("meals", response.data.popularMeals);
        setLoading(false);
      })
      .catch(_error => {
        toastError(_error || trans("someThingWantWrong"));
      });
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title={trans("home")} description={settings.description} />
      {data.slider && <MainSlider slider={data.slider} />}
      {data.categories && <Menu categories={data.categories} />}
      {data.middleBanners && <Banners banners={data.middleBanners} />}
      {data.popularMeals && <PopularDishes />}
      {data.offerBanner && <HomeBanner banner={data.offerBanner} />}

      <InViewPort component={<LatestNews />} />
    </>
  );
}
