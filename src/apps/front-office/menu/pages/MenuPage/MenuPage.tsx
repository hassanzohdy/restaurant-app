import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Loader, {
  Error,
} from "apps/front-office/design-system/components/Indicators/Indicators";
import MealsContainer from "apps/front-office/menu/components/MealsContainer";
import ViewDisplayMode from "apps/front-office/menu/components/ViewDisplayMode";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import { useState } from "react";
import MenuSidebar from "../../components/MenuSidebarSidebar";
import "./MenuPage.scss";

export default function MenuPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealType[]>([]);
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    getMeals()
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => {
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Helmet title={trans("menu")} />
      <Breadcrumb title="Menu" navItems={[{ name: "Menu" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <MenuSidebar />
          </div>
          <div className="basis-3/4 shopItems">
            <ViewDisplayMode />
            <MealsContainer meals={meals} />
          </div>
        </div>
      </div>
    </>
  );
}
