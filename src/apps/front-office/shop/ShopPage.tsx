import Helmet from "@mongez/react-helmet";
import Breadcrumb from "../design-system/layouts/Breadcrumb";
import PopularDishesItem from "../home/pages/HomePage/PopularDishes/PopularDishesItem";
import "./ShopPage.scss";
import ShopSidebar from "./components/ShopSidebar";
import ShopViewOpts from "./components/ShopViewOpts";

function ShopPage() {
  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Shop" navItems={[{ name: "Shop" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <ShopSidebar />
          </div>
          <div className="basis-3/4 shopItems">
            <ShopViewOpts />
            <PopularDishesItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
