import Helmet from "@mongez/react-helmet";
import MealsContainer from "apps/front-office/menu/components/MealsContainer";
import ViewDisplayMode from "apps/front-office/menu/components/ViewDisplayMode";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import MenuSidebar from "../../components/MenuSidebarSidebar";
import "./MenuPage.scss";

export default function MenuPage() {
  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Menu" navItems={[{ name: "Menu" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <MenuSidebar />
          </div>
          <div className="basis-3/4 shopItems">
            <ViewDisplayMode />
            <MealsContainer />
          </div>
        </div>
      </div>
    </>
  );
}
